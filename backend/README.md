# TechNative — Backend

Express.js API server for handling contact form submissions via email.

## Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your SMTP credentials
npm run dev
```

## Environment Variables

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 5000) |
| `FRONTEND_URL` | Frontend URL for CORS (e.g. https://technative.com) |
| `SMTP_HOST` | SMTP host (e.g. smtp.gmail.com) |
| `SMTP_PORT` | SMTP port (usually 587) |
| `SMTP_USER` | Your email address |
| `SMTP_PASS` | App password (NOT your login password) |
| `CONTACT_RECEIVER_EMAIL` | Where contact form emails go |
| `BUSINESS_PHONE` | Phone number shown in emails |

## Gmail Setup
1. Enable 2-Factor Authentication on Gmail
2. Go to Google Account → Security → App Passwords
3. Generate an App Password for "Mail"
4. Use that 16-char password as `SMTP_PASS`

## Endpoints
- `GET /health` — Health check
- `POST /api/contact` — Submit contact form
  - Body: `{ firstName, lastName, email, phone, service, message }`
