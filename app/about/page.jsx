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
                <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-400 mb-6">
                  <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
                  DPIIT Registered Startup • Startup India Recognized
                </div>
                <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Who we are
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed text-lg">
                  <strong className="text-white">Tech Shekhada Private Limited</strong> is a DPIIT registered startup and technology product company. 
                  We don't just build client code; we research, engineer, and scale high-performance proprietary software systems like the trademarked <strong className="text-white">InstaGenius™</strong> platform and <strong className="text-white">SellerOS</strong>. 
                  Our mission is to create industrial-grade software that solves complex automation and workflow challenges with algorithmic precision.
                </p>
              </div>

              {/* DPIIT Recognition & Corporate Profile Card */}
              <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-500/10 via-indigo-500/5 to-slate-900/40 p-8 sm:p-10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-white/10">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-sky-400">Government Recognition</span>
                    <h3 className="mt-1 text-2xl font-bold text-white font-display">DPIIT Registered Startup</h3>
                    <p className="text-sm text-slate-400 mt-1">Recognized under the Startup India initiative by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry, Government of India.</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-slate-900/80 border border-slate-700 px-4 py-3 text-xs font-mono text-slate-300">
                    <span className="text-slate-500">CIN:</span> {SITE.cin}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-3 mt-6">
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Entity Type</span>
                    <p className="text-base font-bold text-white mt-1">Private Limited Company</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Intellectual Property</span>
                    <p className="text-base font-bold text-sky-400 mt-1">InstaGenius™ (Trademarked)</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Headquarters</span>
                    <p className="text-base font-bold text-white mt-1">Surat, Gujarat, India</p>
                  </div>
                </div>
              </div>

              <FounderProfile />
            </div>
            
            <div className="space-y-12">
              <div>
                <h2 className="font-display text-2xl font-bold text-white pt-10">
                  Modern Engineering & Business Model
                </h2>
                <p className="mt-4 text-slate-400 leading-relaxed text-lg">
                  As an officially recognized Indian startup, we operate as a <strong className="text-white">digitally-native</strong> enterprise. 
                  Our model is built on high-efficiency, cloud-first infrastructure that allows us to ship 
                  continuous updates rapidly and maintain global product delivery with uncompromising engineering standards.
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
                    <span><strong className="text-slate-200">Proprietary AI & IP</strong> — Holding registered trademarks like <strong className="text-sky-300">InstaGenius™</strong> and proprietary prompt-synthesis pipelines powered by Google Gemini and Vertex AI.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" /></svg>
                    </div>
                    <span><strong className="text-slate-200">Global Service</strong> — Our tools power creators and sellers across multiple continents with 99.9% uptime.</span>
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
