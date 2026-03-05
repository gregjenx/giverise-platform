import { NextResponse } from "next/server";
import { getSupabaseClient } from "@/lib/supabase";

const VALID_ROLES = ["steward", "funder", "land_trust"];

export async function POST(req: Request) {
  const { email, name, role } = await req.json();

  if (!email || !role) {
    return NextResponse.json(
      { error: "Email and role are required." },
      { status: 400 }
    );
  }

  if (!VALID_ROLES.includes(role)) {
    return NextResponse.json({ error: "Invalid role." }, { status: 400 });
  }

  const supabase = getSupabaseClient();

  // Duplicate check
  const { data: existing } = await supabase
    .from("waitlist")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { error: "This email is already on the waitlist." },
      { status: 409 }
    );
  }

  const { error } = await supabase
    .from("waitlist")
    .insert({ email, name: name || null, role });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
