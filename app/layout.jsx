import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OrganizationJsonLd, WebSiteJsonLd } from '@/components/JsonLd';
import { SITE, absoluteUrl } from '@/lib/site';

const syne = Syne({
  variable: '--font-geist-display',
  subsets: ['latin'],
  display: 'swap',
});

const dmSans = DM_Sans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const ogImage = absoluteUrl(SITE.ogImagePath);

export const metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: `Tech Shekhada | ${SITE.tagline}`,
    template: `%s | Tech Shekhada`,
  },
  description: SITE.description,
  keywords: SITE.keywords?.split?.(', ') ?? ['Tech Shekhada', 'product studio', 'AI tools', 'InstaGenius AI', 'SellerOS', 'SaaS', 'growth tools'],

  authors: [{ name: SITE.name, url: SITE.baseUrl }],
  creator: SITE.name,
  publisher: SITE.name,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: SITE.locale ?? 'en_IN',
    url: SITE.baseUrl,
    siteName: SITE.name,
    title: `Tech Shekhada — ${SITE.tagline}`,
    description: SITE.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.name} – ${SITE.tagline}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: SITE.twitterHandle,
    creator: SITE.twitterHandle,
    title: `Tech Shekhada — ${SITE.tagline}`,
    description: SITE.description,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: 'any' }],
    apple: [{ url: '/logo.png', type: 'image/png', sizes: '180x180' }],
  },
  alternates: { canonical: SITE.baseUrl },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)]">
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
