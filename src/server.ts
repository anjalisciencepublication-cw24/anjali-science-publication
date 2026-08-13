import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';
import { connectDatabase } from './config/database';
import authRoutes from './routes/authRoutes';

const app = express();
const PORT = Number(process.env.PORT) || 5000;

// Connect to MongoDB
connectDatabase();

app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  }),
);
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(
  '/api',
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
  }),
);

// Auth routes
app.use('/api/v1/auth', authRoutes);

app.post('/api/v1/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      });
    }

    const smtpUser = process.env.EMAIL_USER || 'anjalisciencepublication@gmail.com';
    const smtpPass = process.env.EMAIL_PASS;

    if (!smtpPass) {
      console.warn('EMAIL_PASS is not configured. Contact form request accepted but email not sent.');
      return res.status(200).json({
        success: true,
        message: 'Your message has been received. Add EMAIL_PASS in the server environment to enable delivery.',
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${smtpUser}>`,
      to: 'anjalisciencepublication@gmail.com',
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: 'Your message has been sent successfully.',
    });
  } catch (error) {
    console.error('Contact email error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to send the message right now. Please try again later.',
    });
  }
});

app.get('/api/v1/health', (_req, res) => {
  res.json({
    success: true,
    message: 'Anjali Science Publication API is running',
    timestamp: new Date().toISOString(),
  });
});

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
