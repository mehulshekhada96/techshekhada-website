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

See **[BRANDING.md](./BRANDING.md)** for site URLs (main site, SellerOS app), logo SVGs, favicon, brand colors, and copy for linking to SellerOS from techshekhada.com.

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

## SEO & discoverability

The site is set up to be crawlable and indexable by search engines:

- **Metadata**: Every page has unique `title`, `description`, Open Graph and Twitter Card tags, and canonical URLs.
- **Sitemap**: `https://techshekhada.com/sitemap.xml` is generated from `app/sitemap.js` and linked in `app/robots.js`.
- **Robots**: `https://techshekhada.com/robots.txt` allows all crawlers and points to the sitemap; `/api/` is disallowed.
- **Structured data**: Organization and WebSite JSON-LD in the root layout; BreadcrumbList on products and product detail pages; SoftwareApplication schema on each product page.
- **Manifest**: `app/manifest.js` provides a web app manifest for PWA/discoverability.

To get indexed by Google:

1. Deploy the site and set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://techshekhada.com`).
2. In [Google Search Console](https://search.google.com/search-console), add the property (domain or URL prefix) and verify ownership (HTML tag, DNS, or file).
3. Submit the sitemap: **Sitemaps** → Add new sitemap → `https://techshekhada.com/sitemap.xml`.
4. Optionally use **URL Inspection** to request indexing for the homepage and key pages.

## Deploy

Deploy to Vercel, Netlify, or any Node host. Set the root directory to `techshekhada-website` and build command to `npm run build`. Add `RESEND_API_KEY` and `CONTACT_EMAIL_TO` in the host's environment variables...
