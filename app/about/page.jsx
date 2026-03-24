import { SITE, absoluteUrl } from '@/lib/site';

export const metadata = {
  title: 'About Us',
  description:
    'Tech Shekhada builds products and solutions that scale. InstaGenius AI for Instagram growth, SellerOS for Meesho Snapdeal Amazon PDF sorting. Clarity, quality, delivery.',
  openGraph: {
    title: 'About Tech Shekhada',
    description: 'We build tech solutions that scale—with clarity, quality, and delivery you can count on.',
    url: `${SITE.baseUrl}/about`,
    images: [{ url: absoluteUrl(SITE.ogImagePath), width: 1200, height: 630, alt: SITE.name }],
  },
  alternates: { canonical: `${SITE.baseUrl}/about` },
  robots: { index: true, follow: true },
};

export default function AboutPage() {
  return (
    <div className="relative">
      <section className="border-b border-[var(--border)] bg-grid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            A Product Studio for the AI Era
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            We build industrial-grade software that helps creators and businesses scale.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                Who we are
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Tech Shekhada is a product-first technology studio. We focus on creating 
                high-performance tools like InstaGenius AI and SellerOS that solve complex 
                workflow problems for modern users. Our passion lies in the intersection 
                of clean architecture and superior user experience.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Our philosophy is simple: <strong className="text-slate-300">Build products that we would use ourselves.</strong>
                Every tool we ship is built with a focus on reliability, performance, and industrial-grade standards.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                Our Focus
              </h2>
              <ul className="mt-4 space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">Product Studio</strong> — We own the entire lifecycle of our products, from initial concept to industrial scaling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">AI Innovation</strong> — We leverage Google Gemini AI to build next-generation automation that feels like magic.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">Efficiency Tools</strong> — We build the internal engines that power e-commerce and marketing workflows.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">Industrial Quality</strong> — We ship polished, production-ready software that stays reliable at scale.</span>
                </li>
              </ul>
            </div>
          </div>


          <div className="mt-20 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 sm:p-12">
            <h2 className="font-display text-xl font-bold text-white text-center">
              Our values
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 text-xl">✓</div>
                <h3 className="mt-3 font-semibold text-white">Quality first</h3>
                <p className="mt-1 text-sm text-slate-400">We ship code and UX we're proud of—no shortcuts.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 text-xl">⚡</div>
                <h3 className="mt-3 font-semibold text-white">Clarity & speed</h3>
                <p className="mt-1 text-sm text-slate-400">Clear communication and on-time delivery.</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 text-sky-400 text-xl">∞</div>
                <h3 className="mt-3 font-semibold text-white">Built to scale</h3>
                <p className="mt-1 text-sm text-slate-400">Architecture that grows with your needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
