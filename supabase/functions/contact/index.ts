// Supabase Edge Function: contact
// Sends form submissions to Resend API. Set RESEND_API_KEY as a secret in Supabase.

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405 });
  }

  const body = await req.json().catch(() => ({}));
  const { name, email, message } = body || {};
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 });
  }

  const subject = `New contact form submission from ${name}`;
  const html = `
    <h2>New contact from portfolio site</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/\n/g,'<br/>')}</p>
  `;

  const API_KEY = Deno.env.get('RESEND_API_KEY') || '';
  if (!API_KEY) {
    return new Response(JSON.stringify({ error: 'Mail API key not configured' }), { status: 500 });
  }

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        from: 'no-reply@sunroks.com',
        to: 'deepak.rc109@gmail.com',
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      return new Response(JSON.stringify({ error: 'Failed to send email', detail: text }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    console.error('Supabase contact function error:', err);
    return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
  }
};
