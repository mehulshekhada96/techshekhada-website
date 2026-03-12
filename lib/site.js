export const SITE = {
  name: 'Tech Shekhada',
  tagline: 'Thinking Tech Solutions? Think Tech Shekhada.',
  description: 'Tech Shekhada builds products and solutions that scale. From AI-powered Instagram growth (InstaGenius AI) to custom software—we deliver excellence.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://techshekhada.com',
  ogImagePath: '/logo.png',
  twitterHandle: '@techshekhada',
};

export function absoluteUrl(path) {
  const base = SITE.baseUrl.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
