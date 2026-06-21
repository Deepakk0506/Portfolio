const validateEmail = (email) => typeof email === 'string' && /\S+@\S+\.\S+/.test(email);

const parseBody = async (req) => {
  if (req.body && Object.keys(req.body).length) return req.body;
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = await parseBody(req);
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const apiKey = process.env.RESEND_API_KEY || '';
    if (!apiKey) {
      return res.status(500).json({ error: 'Mail API key not configured' });
    }

    const subject = `New contact form submission from ${name}`;
    const html = `
      <h2>New contact from portfolio site</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>')}</p>
    `;

    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'no-reply@sunroks.com',
        to: 'deepak.rc109@gmail.com',
        subject,
        html,
      }),
    });

    if (!resp.ok) {
      const detail = await resp.text().catch(() => '');
      return res.status(500).json({ error: 'Failed to send email', detail });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Vercel contact API error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
