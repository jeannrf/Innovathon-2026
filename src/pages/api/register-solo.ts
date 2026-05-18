import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabaseServer";

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        const { error } = await supabase.from("participants").insert({
            participant_names: body.participant_names,
            participant_last_names: body.participant_last_names,
            participant_age: body.participant_age,
            participant_dni: body.participant_dni,
            participant_team: null,
            participant_email: body.participant_email,
            participant_tlf: body.participant_tlf,
            participant_uni: body.participant_uni,
            participant_career: body.participant_career,
            participant_info: body.participant_info,
        });

        if (error) throw error;

        return new Response(
            JSON.stringify({ message: "Participante registrado como buscando equipo." }),
            { status: 201 }
        );
    } catch (error: any) {
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500 }
        );
    }
};