export const prerender = false;

import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabaseServer";
import { validateParticipant } from "../../lib/validators";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        const {
            team_name,
            team_idea,
            team_category,
            accept_bases,
            accept_personal_data,
            tools,
            participants,
        } = body;

        // Validaciones generales

        if (!team_name?.trim()) {
            return new Response(
                JSON.stringify({
                    error: "El nombre del equipo es obligatorio.",
                }),
                { status: 400 }
            );
        }

        if (!team_idea?.trim()) {
            return new Response(
                JSON.stringify({
                    error: "La idea del equipo es obligatoria.",
                }),
                { status: 400 }
            );
        }

        if (!team_category) {
            return new Response(
                JSON.stringify({
                    error: "Debe seleccionar una categoría.",
                }),
                { status: 400 }
            );
        }

        if (!accept_bases || !accept_personal_data) {
            return new Response(
                JSON.stringify({
                    error:
                        "Debe aceptar las bases y el tratamiento de datos personales.",
                }),
                { status: 400 }
            );
        }

        if (!participants || participants.length < 2 || participants.length > 5) {
            return new Response(
                JSON.stringify({
                    error: "El equipo debe tener entre 2 y 5 participantes.",
                }),
                { status: 400 }
            );
        }

        // Validar participantes

        const validationErrors = participants.flatMap(
            (participant: any, index: number) =>
                validateParticipant(participant).map(
                    (error) => `Participante ${index + 1}: ${error}`
                )
        );

        if (validationErrors.length > 0) {
            return new Response(
                JSON.stringify({
                    errors: validationErrors,
                }),
                { status: 400 }
            );
        }

        // Validar si ya existe equipo

        const { data: existingTeam } = await supabase
            .from("teams")
            .select("team_id")
            .eq("team_name", team_name)
            .maybeSingle();

        if (existingTeam) {
            return new Response(
                JSON.stringify({
                    error: "Ya existe un equipo con ese nombre.",
                }),
                { status: 400 }
            );
        }

        // Validar si hay duplicados de participantes

        for (const participant of participants) {
            const { data: existingParticipant } = await supabase
                .from("participants")
                .select("participant_id")
                .or(
                    `participant_dni.eq.${participant.participant_dni},participant_email.eq.${participant.participant_email},participant_tlf.eq.${participant.participant_tlf}`
                )
                .maybeSingle();

            if (existingParticipant) {
                return new Response(
                    JSON.stringify({
                        error: `El participante con DNI ${participant.participant_dni} ya está registrado.`,
                    }),
                    { status: 400 }
                );
            }
        }

        // Obtener status pendiente

        const { data: pendingStatus, error: statusError } = await supabase
            .from("status")
            .select("status_id")
            .eq("status_name", "Pendiente")
            .single();

        if (statusError || !pendingStatus) {
            return new Response(
                JSON.stringify({
                    error: "No se encontró el estado Pendiente.",
                }),
                { status: 500 }
            );
        }

        // Crear equipo

        const { data: team, error: teamError } = await supabase
            .from("teams")
            .insert({
                team_name: team_name.trim(),
                team_idea: team_idea.trim(),
                team_category,
                accept_bases,
                accept_personal_data,
                team_status: pendingStatus.status_id,
            })
            .select()
            .single();

        if (teamError || !team) {
            return new Response(
                JSON.stringify({
                    error: teamError?.message || "Error al crear el equipo.",
                }),
                { status: 500 }
            );
        }

        // Insertar participantes

        const participantsToInsert = participants.map((participant: any) => ({
            participant_names: participant.participant_names.trim(),
            participant_last_names: participant.participant_last_names.trim(),
            participant_age: participant.participant_age,
            participant_dni: participant.participant_dni.trim(),
            participant_team: team.team_id,
            participant_email: participant.participant_email.trim().toLowerCase(),
            participant_tlf: participant.participant_tlf.trim(),
            participant_uni: participant.participant_uni,
            participant_career: participant.participant_career.trim(),
            participant_info: participant.participant_info?.trim() || "",
        }));

        const { error: participantsError } = await supabase
            .from("participants")
            .insert(participantsToInsert);

        if (participantsError) {
            return new Response(
                JSON.stringify({
                    error: participantsError.message,
                }),
                { status: 500 }
            );
        }

        // Insertar herramientas IA

        if (tools && tools.length > 0) {
            const toolsToInsert = tools.map((tool_id: number) => ({
                team_id: team.team_id,
                tool_id,
            }));

            const { error: toolsError } = await supabase
                .from("team_tools")
                .insert(toolsToInsert);

            if (toolsError) {
                return new Response(
                    JSON.stringify({
                        error: toolsError.message,
                    }),
                    { status: 500 }
                );
            }
        }

        // Respuesta exitosa

        return new Response(
            JSON.stringify({
                message: "Equipo registrado correctamente.",
                team_id: team.team_id,
            }),
            { status: 201 }
        );
    } catch (error: any) {
        console.error(error);

        return new Response(
            JSON.stringify({
                error: error.message || "Error interno del servidor.",
            }),
            { status: 500 }
        );
    }
};