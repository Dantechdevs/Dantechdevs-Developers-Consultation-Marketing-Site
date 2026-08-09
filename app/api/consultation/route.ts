import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

// Use the service role key here (server-side only) so inserts aren't
// blocked by row-level security meant for client-side reads.
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot check — if this hidden field is filled, it's a bot.
    // Return a fake success so bots don't learn to avoid the field.
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const {
      full_name,
      email,
      phone,
      organization,
      service_needed,
      preferred_date,
      project_details,
    } = body;

    // 2. Server-side validation of required fields
    if (!full_name || !email || !phone || !service_needed || !project_details) {
      return NextResponse.json(
        { message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // 3. Insert into Supabase
    const { error: dbError } = await supabaseAdmin.from("consultations").insert({
      full_name,
      email,
      phone,
      organization: organization || null,
      service_needed,
      preferred_date: preferred_date || null,
      project_details,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { message: "Could not save your request. Please try again." },
        { status: 500 }
      );
    }

    // 4. Send notification email (non-blocking failure — don't fail the
    // whole request just because the email didn't send)
    try {
      await resend.emails.send({
        from: "Dantechdevs Consultations <onboarding@resend.dev>",
        to: "damnngwasi@gmail.com",
        subject: `New Consultation Request: ${full_name}`,
        text: `
New consultation request received:

Name: ${full_name}
Email: ${email}
Phone: ${phone}
Organization: ${organization || "N/A"}
Service Needed: ${service_needed}
Preferred Date: ${preferred_date || "Not specified"}

Details:
${project_details}
        `.trim(),
      });
    } catch (emailError) {
      console.error("Resend email error:", emailError);
      // Intentionally not returning an error response — the lead is
      // already saved in Supabase even if the email notification fails.
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Consultation route error:", err);
    return NextResponse.json(
      { message: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
