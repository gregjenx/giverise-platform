import { NextResponse } from "next/server";
import { Resend } from "resend";
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

  const roleLabel: Record<string, string> = {
    steward: "Land Steward",
    funder: "Funder",
    land_trust: "Land Trust",
  };

  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: "Groundtrust Waitlist <hello@giverise.ai>",
    to: "hello@giverise.ai",
    subject: `New waitlist signup — ${roleLabel[role]}`,
    text: `Name: ${name || "—"}\nEmail: ${email}\nRole: ${roleLabel[role]}`,
  });

  return NextResponse.json({ ok: true });
}
