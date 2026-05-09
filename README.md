# TechNative — Full Stack Website

Digital Marketing Agency website built with React Vite (frontend) + Express (backend).

## Project Structure

```
technative/
├── frontend/        ← React + Vite SPA
│   ├── src/
│   │   ├── pages/   ← Home, About, Services, Contact
│   │   ├── components/ ← Navbar, Footer
│   │   └── styles/  ← Global CSS
│   ├── .env.example
│   └── README.md
│
└── backend/         ← Express API (Contact Form Email)
    ├── index.js
    ├── .env.example
    └── README.md
```

## Quick Start

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
# Fill in your SMTP credentials in .env
npm run dev       # Runs on port 5000
```

### 2. Frontend
```bash
cd frontend
npm install
cp .env.example .env
# Edit phone, email, addresses in .env
npm run dev       # Runs on port 5173
```

Open http://localhost:5173 to see the website!

## Production Deployment

### Backend — Railway / Render / VPS
1. Upload `backend/` folder
2. Set environment variables from `.env.example`
3. `npm start`

### Frontend — Vercel (Recommended)
1. Upload `frontend/` folder to Vercel
2. Set `VITE_API_URL` to your deployed backend URL
3. Set all other `VITE_*` env vars in Vercel dashboard
4. Deploy!

## Features
- ✅ Animated Hero Carousel (3 slides, auto-play)
- ✅ Interactive Services Explorer
- ✅ Client Testimonials Carousel  
- ✅ Contact Form → Email (no database needed!)
- ✅ Auto-reply email to inquirer
- ✅ Fully responsive (mobile first)
- ✅ Smooth animations & transitions
- ✅ Dark theme with gradient accents
- ✅ All contact info controlled via .env
- ✅ SEO meta tags
- ✅ 4 Pages: Home, About, Services, Contact
