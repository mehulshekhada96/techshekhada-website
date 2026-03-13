export const SITE = {
  name: 'Tech Shekhada',
  tagline: 'Thinking Tech Solutions? Think Tech Shekhada.',
  description:
    'Tech Shekhada builds products and solutions that scale. InstaGenius AI for Instagram growth, SellerOS for Meesho Snapdeal Amazon PDF sorting and SKU tools. Custom software and tech solutions for businesses.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://techshekhada.com',
  ogImagePath: '/logo.png',
  twitterHandle: '@techshekhada',
  /** SEO: comma-separated keywords for meta and schema */
  keywords:
    'Tech Shekhada, tech solutions, software company, InstaGenius AI, Instagram AI, SellerOS, Smart PDF Sort, Meesho order sorting, Snapdeal PDF, Amazon order PDF, SKU extraction, Indian sellers, SaaS, custom software',
  /** For schema.org Organization / WebSite */
  locale: 'en_IN',
};

export function absoluteUrl(path) {
  const base = SITE.baseUrl.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
