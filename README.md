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

## Branding & site details

See **[BRANDING.md](./BRANDING.md)** for site URLs (main site, OMS portal), logo SVGs, favicon, OMS brand colors, and copy for linking to the OMS portal from techshekhada.com.

## Customization

- **Product links**: Edit `lib/products.js` to set the live URL for InstaGenius AI (`href`) and add more products.
- **Contact form**: Uses Resend. Set `RESEND_API_KEY` and `CONTACT_EMAIL_TO` in `.env` (see `.env.example`). Optionally set `RESEND_FROM_EMAIL` once your domain is verified in Resend.
- **Favicon**: Replace `public/favicon.png` with your own logo if desired.

## GitHub

This project has its own git repo. To push to GitHub:

1. **Create a new repository** on [GitHub](https://github.com/new):
   - Name it e.g. `techshekhada-website` (or `techshekhada.com`)
   - Do **not** initialize with a README (this project already has one)

2. **Add the remote and push** (replace `YOUR_USERNAME` and `REPO_NAME` with your GitHub username and repo name):

```bash
cd techshekhada-website
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Deploy

Deploy to Vercel, Netlify, or any Node host. Set the root directory to `techshekhada-website` and build command to `npm run build`. Add `RESEND_API_KEY` and `CONTACT_EMAIL_TO` in the host's environment variables...
