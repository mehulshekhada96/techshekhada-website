import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: 'Email is not configured.' },
      { status: 500 }
    );
  }

  if (!process.env.CONTACT_EMAIL_TO) {
    return NextResponse.json(
      { success: false, error: 'CONTACT_EMAIL_TO is not set.' },
      { status: 500 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request body.' },
      { status: 400 }
    );
  }

  const { name, email, subject: subjectLine, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: 'Name, email, and message are required.' },
      { status: 400 }
    );
  }

  // Resend API requires a "from" address. We use their default sender (no domain verification needed).
  // You only need RESEND_API_KEY + CONTACT_EMAIL_TO; no RESEND_FROM_EMAIL required.
  const from = process.env.RESEND_FROM_EMAIL || 'Tech Shekhada <onboarding@resend.dev>';
  const toAddress = process.env.CONTACT_EMAIL_TO;

  const emailSubject = subjectLine
    ? `[Tech Shekhada] ${subjectLine}`
    : `[Tech Shekhada] Contact from ${name}`;

  const html = `
    <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
    ${subjectLine ? `<p><strong>Subject:</strong> ${subjectLine}</p>` : ''}
    <p><strong>Message:</strong></p>
    <pre style="white-space: pre-wrap; font-family: inherit;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
  `;

  const { data, error } = await resend.emails.send({
    from: from,
    to: toAddress,
    replyTo: email,
    subject: emailSubject,
    html,
  });

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send email.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}
