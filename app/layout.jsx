import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

export const metadata = {
  title: 'Tech Shekhada | Thinking Tech Solutions? Think Tech Shekhada.',
  description:
    'Tech Shekhada builds products and solutions that scale. From AI-powered Instagram growth (InstaGenius AI) to custom software—we deliver excellence.',
  keywords: ['Tech Shekhada', 'tech solutions', 'software', 'InstaGenius AI', 'Instagram AI'],
  openGraph: {
    title: 'Tech Shekhada — Thinking Tech Solutions? Think Tech Shekhada.',
    description: 'Products and solutions that scale. InstaGenius AI and more.',
    url: 'https://techshekhada.com',
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: 'any' }],
    apple: [{ url: '/logo.png', type: 'image/png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--bg-primary)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
