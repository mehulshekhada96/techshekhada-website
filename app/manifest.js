import { SITE } from '@/lib/site';

/** @type {import('next').MetadataRoute.Manifest} */
export default function manifest() {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-IN',
    icons: [
      { src: '/favicon.png', sizes: 'any', type: 'image/png', purpose: 'any' },
      { src: '/logo.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
  };
}
