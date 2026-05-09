# TechNative — Frontend

React + Vite frontend for TechNative digital marketing agency website.

## Setup

```bash
cd frontend
npm install
cp .env.example .env
# Edit .env with your values (phone, email, addresses, social links)
npm run dev
```

## Build for Production

```bash
npm run build
# Output in dist/ — deploy to Vercel, Netlify, or any static host
```

## Environment Variables

All values in `.env` control what's displayed on the site — no code changes needed.

| Variable | Description |
|---|---|
| `VITE_API_URL` | Backend URL (e.g. https://api.technative.com) |
| `VITE_BUSINESS_PHONE` | Phone number displayed on site |
| `VITE_BUSINESS_EMAIL` | Main business email |
| `VITE_BUSINESS_EMAIL_SUPPORT` | Support email |
| `VITE_ADDRESS_DELHI` | Delhi office address |
| `VITE_ADDRESS_GHAZIABAD` | Ghaziabad office address |
| `VITE_SOCIAL_FACEBOOK` | Facebook URL |
| `VITE_SOCIAL_INSTAGRAM` | Instagram URL |
| `VITE_SOCIAL_LINKEDIN` | LinkedIn URL |
| `VITE_SOCIAL_TWITTER` | Twitter/X URL |

## Pages
- `/` — Home (Hero Carousel, Stats, Services, Testimonials)
- `/about` — About Us (Story, Values, Team, Timeline)
- `/services` — Services (Interactive Explorer + FAQ)
- `/contact` — Contact (Form + Map + Office Info)

## Deployment
- **Vercel**: `vercel deploy` from the frontend folder
- **Netlify**: Drop `dist/` folder or connect GitHub
- **Note**: Add a `_redirects` file for SPA routing on Netlify:
  ```
  /* /index.html 200
  ```
