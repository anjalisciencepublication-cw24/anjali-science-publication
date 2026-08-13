"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const database_1 = require("./config/database");
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5000;
// Connect to MongoDB
(0, database_1.connectDatabase)();
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use((0, helmet_1.default)({ crossOriginResourcePolicy: false }));
app.use(express_1.default.json({ limit: '2mb' }));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use('/api', (0, express_rate_limit_1.default)({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false,
}));
// Auth routes
app.use('/api/v1/auth', authRoutes_1.default);
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
        const transporter = nodemailer_1.default.createTransport({
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
    }
    catch (error) {
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
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
