import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabaseClient";

export async function GET() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("insights")
    .select("id, headline, summary")
    .order("created_at", { ascending: false })
    .limit(6);

  if (error) {
    console.error("Error fetching insights:", error.message);
    return NextResponse.json({ data: [], error: error.message }, { status: 500 });
  }

  return NextResponse.json({ data });
}
