export const SITE = {
  name: 'Tech Shekhada Private Limited',
  brandName: 'Tech Shekhada',
  legalName: 'Tech Shekhada Private Limited',
  cin: 'U62099GJ2026PTC180614',
  tagline: 'Premium AI Products for Modern Growth.',
  description:
    'Tech Shekhada Private Limited is a DPIIT registered startup building industrial-grade AI and SaaS products. Featuring InstaGenius™ for Instagram automation and SellerOS for e-commerce efficiency.',
  baseUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://techshekhada.com',
  ogImagePath: '/logo.png',
  twitterHandle: '@techshekhada',
  instagram: 'https://www.instagram.com/tech_shekhada/',
  instaGeniusInstagram: 'https://www.instagram.com/instagenius__ai/',
  phone: '+91 99781 05288',
  email: 'support@techshekhada.com',
  officeAddress: '438, Prime Arcade, Lajamni chowk, Mota Varachha, Surat, Gujarat 394101',
  registeredAddress: 'B-1009, Suman Suraj, B/S White Palace, Utran, Chorasi, Surat - 394105, Gujarat, India',
  /** SEO: comma-separated keywords for meta and schema */
  keywords:
    'Tech Shekhada Private Limited, Tech Shekhada, DPIIT registered startup, Startup India, InstaGenius™, InstaGenius AI, Instagram automation, SellerOS, Smart PDF Sort, Meesho order sorting, Snapdeal PDF, Amazon order PDF, SKU extraction, Indian sellers, SaaS, growth tools',
  /** For schema.org Organization / WebSite */
  locale: 'en_IN',
};

export function absoluteUrl(path) {
  const base = SITE.baseUrl.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}
