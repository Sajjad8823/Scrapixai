// ============================================================
//  SERVER — ScrapixAI Node.js Backend (server/index.js)
//
//  HOW TO USE:
//  1. Copy .env.example to .env and fill in your values
//  2. Run: npm run dev  (starts both React + this server)
//
//  WHAT THIS SERVER DOES:
//  - Receives contact form data from the frontend
//  - Saves lead to Firebase Firestore
//  - Sends notification email via Nodemailer (Gmail)
//  - Returns success/error to frontend
// ============================================================

const express    = require('express');
const cors       = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 5000;

// ── Middleware ────────────────────────────────────────────────
app.use(cors({ origin: 'http://localhost:3000' }));  // Allow React dev server
app.use(express.json());

// ── Firebase Admin (optional — saves leads to Firestore) ─────
// !! TO ENABLE FIREBASE:
//    1. Go to Firebase Console > Project Settings > Service Accounts
//    2. Click "Generate new private key" — save as server/serviceAccountKey.json
//    3. Uncomment the lines below
// ─────────────────────────────────────────────────────────────
// const admin = require('firebase-admin');
// const serviceAccount = require('./serviceAccountKey.json');
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });
// const db = admin.firestore();

// ── Email Transporter (Gmail) ─────────────────────────────────
// !! TO ENABLE EMAIL:
//    1. Set GMAIL_USER and GMAIL_PASS in your .env file
//    2. For Gmail: use an App Password (not your main password)
//       Google Account > Security > 2-Step Verification > App passwords
// ─────────────────────────────────────────────────────────────
const createTransporter = () => {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    console.warn('⚠️  Email not configured. Set GMAIL_USER and GMAIL_PASS in .env');
    return null;
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,   // Use App Password, not your real password
    },
  });
};

// ── POST /api/contact — Receive form submission ───────────────
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, service, budget, message, source } = req.body;

    // Basic server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email address.' });
    }

    console.log('📨 New contact form submission:', { name, email, company, service, budget });

    // ── 1. Save to Firebase (uncomment when Firebase is set up) ──
    // await db.collection('leads').add({
    //   name, email, company, service, budget, message, source,
    //   createdAt: admin.firestore.FieldValue.serverTimestamp(),
    //   status: 'new',
    // });
    // console.log('✅ Lead saved to Firebase');

    // ── 2. Send notification email to your team ───────────────
    const transporter = createTransporter();
    if (transporter) {
      // Email to YOU (notification)
      await transporter.sendMail({
        from:    `"Scrapix AI Website" <${process.env.GMAIL_USER}>`,
        to:      process.env.NOTIFY_EMAIL || process.env.GMAIL_USER,  // !! Your email
        subject: `New Lead: ${name} — ${service || 'General Inquiry'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #6366f1;">New Lead from ScrapixAI Website</h2>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Name</td>    <td style="padding:8px;">${name}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Email</td>   <td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Company</td> <td style="padding:8px;">${company || 'Not provided'}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Service</td> <td style="padding:8px;">${service || 'Not specified'}</td></tr>
              <tr><td style="padding:8px; font-weight:bold; color:#555;">Budget</td>  <td style="padding:8px;">${budget || 'Not specified'}</td></tr>
            </table>
            <h3 style="color:#555;">Message:</h3>
            <p style="background:#f5f5f5; padding:16px; border-radius:8px; line-height:1.6;">${message}</p>
            <p style="color:#999; font-size:12px;">Submitted via ${source || 'website'}</p>
          </div>
        `,
      });

      // Auto-reply email to the LEAD
      await transporter.sendMail({
        from:    `"Scrapix AI" <${process.env.GMAIL_USER}>`,
        to:      email,
        subject: `We received your message — Scrapix AI`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f1a; color: #e2e8f0; padding: 40px; border-radius: 12px;">
            <h2 style="color: #a5b4fc;">Hi ${name},</h2>
            <p style="line-height: 1.7; color: #94a3b8;">
              Thank you for reaching out to Scrapix AI. We have received your message and will get back to you within <strong style="color: #e2e8f0;">24 hours</strong>.
            </p>
            <p style="line-height: 1.7; color: #94a3b8;">
              In the meantime, feel free to explore our <a href="https://scrapixai.com/case-studies" style="color: #6366f1;">case studies</a> to see what we have built for clients like you.
            </p>
            <hr style="border-color: rgba(255,255,255,.1); margin: 24px 0;" />
            <p style="color: #475569; font-size: 13px;">
              Scrapix AI — We Build AI Systems That Replace Manual Work<br/>
              <!-- !! UPDATE: Add your real website and phone -->
              <a href="https://scrapixai.com" style="color: #6366f1;">scrapixai.com</a>
            </p>
          </div>
        `,
      });

      console.log('✅ Emails sent successfully');
    }

    // ── 3. Return success ──────────────────────────────────────
    res.json({ success: true, message: 'Form submitted successfully.' });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// ── Health check endpoint ─────────────────────────────────────
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Scrapix AI server is running' });
});

// ── Start server ──────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Scrapix AI server running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
});
