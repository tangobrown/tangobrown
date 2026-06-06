import { NextResponse } from "next/server";

type Payload = {
  name?: string;
  email?: string;
  business?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const business = (body.business || "").trim();
  const message = (body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please add your name, email and a message." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please use a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.RESEND_FROM || "Tim Brown Site <onboarding@resend.dev>";

  if (apiKey && to) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New enquiry from ${name}${business ? ` (${business})` : ""}`,
        text:
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Business: ${business || "—"}\n\n` +
          message,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Resend send failed:", res.status, detail);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 }
      );
    }
  } else {
    // No email service configured — submissions are logged to the server.
    console.log("Contact form submission (no email provider configured):", {
      name,
      email,
      business,
      message,
    });
  }

  return NextResponse.json({ ok: true });
}
