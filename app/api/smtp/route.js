import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, printerModel } = body || {};

    if (!name || !email || !phone) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const host = "smtp.gmail.com";
    const port = 587;
    const user = "ahaanwell@gmail.com";
    const pass = "qwbnsavibnsvdwma";
    const to = "nowstartsolution@gmail.com";

    // nowstartsolution@gmail.com
    if (!host || !user || !pass) {
      return new Response(
        JSON.stringify({ ok: false, error: "SMTP not configured" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host, // must be a valid hostname (no https://)
      port,
      secure: false,
      auth: { user, pass },
    });

    const subject = `Printer Setup Request: ${printerModel ? ` (${printerModel})` : ""}`;
    const html = `
      <h2>New Printer Setup Request</h2>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Printer Model:</strong> ${printerModel}</li>
        <li><strong>Time:</strong> ${new Date().toISOString()}</li>
      </ul>
    `;

    await transporter.sendMail({
      from: user,
      to,
      subject,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: err?.message || "Unknown error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
