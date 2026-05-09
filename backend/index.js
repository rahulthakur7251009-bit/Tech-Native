import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ────────────────────────────────────────────────────────────────
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

// ─── Nodemailer Transporter ────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ─── Routes ───────────────────────────────────────────────────────────────────

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'TechNative Backend is running 🚀' });
});

// Contact Form Submission
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  if (!firstName || !email || !message) {
    return res.status(400).json({ success: false, error: 'Please fill all required fields.' });
  }

  // Email to business owner
  const ownerMail = {
    from: `"${process.env.CONTACT_FROM_NAME || 'TechNative Website'}" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_RECEIVER_EMAIL || 'info@nativesoftservices.com',
    subject: `🚀 New Inquiry from ${firstName} ${lastName || ''} — TechNative`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #00d4ff, #7b2ff7); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 2px;">TECHNATIVE</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">New Contact Form Submission</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #888; width: 140px;">Name</td><td style="padding: 10px 0; color: #fff; font-weight: 600;">${firstName} ${lastName || ''}</td></tr>
            <tr><td style="padding: 10px 0; color: #888;">Email</td><td style="padding: 10px 0; color: #00d4ff;"><a href="mailto:${email}" style="color: #00d4ff;">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 10px 0; color: #888;">Phone</td><td style="padding: 10px 0; color: #fff;">${phone}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 10px 0; color: #888;">Service</td><td style="padding: 10px 0; color: #7b2ff7; font-weight: 600;">${service}</td></tr>` : ''}
          </table>
          <div style="margin-top: 20px; padding: 20px; background: #111118; border-radius: 8px; border-left: 3px solid #00d4ff;">
            <p style="color: #888; margin: 0 0 8px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="color: #e0e0e0; margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
        <div style="padding: 20px 30px; background: #050508; text-align: center; color: #555; font-size: 12px;">
          This email was sent from the TechNative contact form • ${process.env.BUSINESS_PHONE || '+91 7880275152'}
        </div>
      </div>
    `,
  };

  // Auto-reply to user
  const userMail = {
    from: `"${process.env.CONTACT_FROM_NAME || 'TechNative'}" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `We received your message — TechNative 🚀`,
    html: `
      <div style="font-family: 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #e0e0e0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #00d4ff, #7b2ff7); padding: 30px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 24px; letter-spacing: 2px;">TECHNATIVE</h1>
        </div>
        <div style="padding: 30px;">
          <h2 style="color: #fff; margin-top: 0;">Hi ${firstName}, we got your message! 👋</h2>
          <p style="color: #aaa; line-height: 1.7;">Thank you for reaching out to TechNative. Our team will review your inquiry and get back to you within <strong style="color: #00d4ff;">24 hours</strong>.</p>
          <p style="color: #aaa; line-height: 1.7;">In the meantime, feel free to call us directly:</p>
          <div style="text-align: center; margin: 25px 0;">
            <a href="tel:${process.env.BUSINESS_PHONE}" style="display: inline-block; background: linear-gradient(135deg, #00d4ff, #7b2ff7); color: white; padding: 12px 30px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 16px;">${process.env.BUSINESS_PHONE || '+91 7880275152'}</a>
          </div>
          <p style="color: #555; font-size: 13px;">— The TechNative Team</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(ownerMail);
    await transporter.sendMail(userMail);
    res.json({ success: true, message: 'Message sent successfully! We will get back to you soon.' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ success: false, error: 'Failed to send message. Please try again or call us directly.' });
  }
});

// ─── Start Server ──────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅ TechNative Backend running on http://localhost:${PORT}`);
});
