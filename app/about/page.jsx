import { SITE, absoluteUrl } from '@/lib/site';
import FounderProfile from '@/components/FounderProfile';

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
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
            A Product Studio for the <span className="gradient-text">AI Era.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-slate-400 text-lg sm:text-xl leading-relaxed">
            We build and scale industrial-grade AI products. 
            Tech Shekhada is an independent product studio focused on precision engineering, 
            algorithmic growth, and cloud-native excellence.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Who we are
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed text-lg">
                  Tech Shekhada is an independent product studio. We don't just write code; 
                  we build, own, and scale high-performance tools like <strong className="text-white">InstaGenius AI</strong> and <strong className="text-white">SellerOS</strong>. 
                  Our focus is on creating industrial-grade products that solve complex 
                  workflow problems for modern users globally.
                </p>
              </div>

              <FounderProfile />
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-white pt-10">
                  Modern Business Model
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed text-lg">
                  We operate as a <strong className="text-white">digitally-native</strong> enterprise. 
                  Our model is built on high-efficiency, cloud-first infrastructure that allows us to ship 
                  updates rapidly and maintain a global reach with minimal overhead.
                </p>
                <ul className="mt-6 space-y-4 text-slate-400">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    </div>
                    <span><strong className="text-slate-200">Scale-First</strong> — Architecture designed to handle millions of requests without manual intervention.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    </div>
                    <span><strong className="text-slate-200">AI-Centric</strong> — Leveraging Google Gemini and Vertex AI to deliver state-of-the-art results.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    </div>
                    <span><strong className="text-slate-200">Global Service</strong> — Our tools power creators and sellers across multiple continents.</span>
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
