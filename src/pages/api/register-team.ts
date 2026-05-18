import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabaseServer";

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

        if (!participants || participants.length < 2 || participants.length > 5) {
            return new Response(
                JSON.stringify({ error: "El equipo debe tener entre 2 y 5 participantes." }),
                { status: 400 }
            );
        }

        if (!accept_bases || !accept_personal_data) {
            return new Response(
                JSON.stringify({ error: "Debe aceptar las bases y el uso de datos personales." }),
                { status: 400 }
            );
        }

        const { data: pendingStatus } = await supabase
            .from("status")
            .select("status_id")
            .eq("status_name", "Pendiente")
            .single();

        const { data: team, error: teamError } = await supabase
            .from("teams")
            .insert({
                team_name,
                team_idea,
                team_category,
                accept_bases,
                accept_personal_data,
                team_status: pendingStatus?.status_id,
            })
            .select()
            .single();

        if (teamError) throw teamError;

        const participantsToInsert = participants.map((p: any) => ({
            participant_names: p.participant_names,
            participant_last_names: p.participant_last_names,
            participant_age: p.participant_age,
            participant_dni: p.participant_dni,
            participant_team: team.team_id,
            participant_email: p.participant_email,
            participant_tlf: p.participant_tlf,
            participant_uni: p.participant_uni,
            participant_career: p.participant_career,
            participant_info: p.participant_info,
        }));

        const { error: participantsError } = await supabase
            .from("participants")
            .insert(participantsToInsert);

        if (participantsError) throw participantsError;

        if (tools && tools.length > 0) {
            const toolsToInsert = tools.map((tool_id: number) => ({
                team_id: team.team_id,
                tool_id,
            }));

            const { error: toolsError } = await supabase
                .from("team_tools")
                .insert(toolsToInsert);

            if (toolsError) throw toolsError;
        }

        return new Response(
            JSON.stringify({
                message: "Equipo registrado correctamente.",
                team_id: team.team_id,
            }),
            { status: 201 }
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
};