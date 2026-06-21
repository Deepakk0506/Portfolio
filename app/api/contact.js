const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY || '');

function validateEmail(email) {
  return typeof email === 'string' && /\S+@\S+\.\S+/.test(email);
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body || {};
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    const subject = `New contact form submission from ${name}`;
    const html = `
      <h2>New contact from portfolio site</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g,'<br/>')}</p>
    `;

    await resend.emails.send({
      from: 'no-reply@sunroks.com',
      to: 'deepak.rc109@gmail.com',
      subject,
      html,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
};
