# Tech Shekhada — Official Website

**techshekhada.com** — *Thinking Tech Solutions? Think Tech Shekhada.*

This is the official company website for Tech Shekhada. It includes:

- **Landing page** — Hero with tagline, products highlight, and CTA
- **Products** — Listing and detail pages (e.g. InstaGenius AI)
- **About** — Company story, what we do, values
- **Contact** — Contact form (sends email via Resend)

## Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS
- JavaScript (Resend for contact form)

## Run locally

```bash
cd techshekhada-website
npm install
npm run dev
```

Open [http://localhost:3002](http://localhost:3002).

## Build for production

```bash
npm run build
npm start
```

## Customization

- **Product links**: Edit `lib/products.js` to set the live URL for InstaGenius AI (`href`) and add more products.
- **Contact form**: Uses Resend. Set `RESEND_API_KEY` and `CONTACT_EMAIL_TO` in `.env` (see `.env.example`). Optionally set `RESEND_FROM_EMAIL` once your domain is verified in Resend.
- **Favicon**: Replace `public/favicon.png` with your own logo if desired.

## Deploy

Deploy to Vercel, Netlify, or any Node host. Set the root directory to `techshekhada-website` and build command to `npm run build`.
