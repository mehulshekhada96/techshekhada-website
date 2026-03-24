export const SITE = {
  name: 'Tech Shekhada',
  tagline: 'Premium AI Products for Modern Growth.',
  description:
    'Tech Shekhada builds premium, industrial-grade products for creators and businesses. Featuring InstaGenius AI for Instagram automation and SellerOS for e-commerce efficiency.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://techshekhada.com',
  ogImagePath: '/logo.png',
  twitterHandle: '@techshekhada',
  /** SEO: comma-separated keywords for meta and schema */
  keywords:
    'Tech Shekhada, product studio, AI tools, InstaGenius AI, Instagram automation, SellerOS, Smart PDF Sort, Meesho order sorting, Snapdeal PDF, Amazon order PDF, SKU extraction, Indian sellers, SaaS, growth tools',
  /** For schema.org Organization / WebSite */
  locale: 'en_IN',
};


export function absoluteUrl(path) {
  const base = SITE.baseUrl.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
