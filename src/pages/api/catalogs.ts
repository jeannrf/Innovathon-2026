import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabaseServer";

export const GET: APIRoute = async () => {
  const [categories, tools, universities] = await Promise.all([
    supabase.from("categories").select("*").order("category_id"),
    supabase.from("ai_tools").select("*").order("tool_id"),
    supabase.from("universities").select("*").order("uni_name"),
  ]);

  return new Response(
    JSON.stringify({
      categories: categories.data,
      tools: tools.data,
      universities: universities.data,
    }),
    { status: 200 }
  );
};