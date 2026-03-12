import { SITE, absoluteUrl } from '@/lib/site';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with Tech Shekhada. Have a project in mind or want to know more? We typically reply within 1–2 business days.',
  openGraph: {
    title: 'Contact Tech Shekhada',
    description: 'Have a project in mind or want to know more? Get in touch—we\'ll respond as soon as we can.',
    url: `${SITE.baseUrl}/contact`,
    images: [{ url: absoluteUrl(SITE.ogImagePath), width: 1200, height: 630, alt: SITE.name }],
  },
  alternates: { canonical: `${SITE.baseUrl}/contact` },
};

export default function ContactLayout({ children }) {
  return children;
}
