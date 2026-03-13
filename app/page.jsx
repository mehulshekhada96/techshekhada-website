import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import { SITE, absoluteUrl } from '@/lib/site';

export const metadata = {
  title: 'Home',
  description: SITE.description,
  openGraph: {
    title: `Tech Shekhada — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.baseUrl,
    type: 'website',
    images: [{ url: absoluteUrl(SITE.ogImagePath), width: 1200, height: 630, alt: `${SITE.name} – ${SITE.tagline}` }],
  },
  alternates: { canonical: SITE.baseUrl },
  robots: { index: true, follow: true },
};

export default function HomePage() {
  const flagship = products[0];

  return (
    <div className="relative overflow-hidden noise">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] animate-pulse-soft pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] animate-pulse-soft pointer-events-none" />
      
      {/* Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        {/* Isolated Grid with Mask */}
        <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-xs font-medium text-sky-400 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
            </span>
            Scaling the future of tech
          </div>

          <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl animate-fade-in text-balance leading-[1.1]">
            Thinking Tech Solutions?
            <br />
            <span className="gradient-text">Think Tech Shekhada.</span>
          </h1>
          
          <p className="mt-8 text-lg text-slate-400 sm:text-xl max-w-2xl mx-auto animate-slide-up text-balance leading-relaxed">
            We build products and solutions that scale—from AI-powered growth tools to custom enterprise software.
            Precision in execution, clarity in results.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-5 animate-slide-up">
            <Link
              href="/products"
              className="group relative inline-flex items-center overflow-hidden rounded-xl bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-2xl transition hover:bg-sky-600 focus:outline-none"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Products
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
            <Link
              href="/contact"
              className="glass inline-flex items-center rounded-xl px-8 py-4 text-sm font-semibold text-slate-200 transition hover:bg-white/10 focus:outline-none"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Products highlight */}
      <section className="relative border-t border-white/[0.05] bg-slate-950/20 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">
              Our Products
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="h-1.5 w-20 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500" />
            </div>
            <p className="mt-6 text-slate-400 text-lg">
              High-performance tools meticulously crafted for modern growth.
            </p>
          </div>

          <div className="mt-14">
            <article className="group glass-dark relative overflow-hidden rounded-[2.5rem] p-1 transition-all duration-700 hover:shadow-[0_0_80px_-15px_rgba(14,165,233,0.3)]">
              <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center p-8 sm:p-12">
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-sky-500/10 border border-sky-500/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
                      {flagship.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl tracking-tight">
                    {flagship.name}
                  </h3>
                  <p className="text-xl text-slate-300 font-medium italic">
                    {flagship.tagline}
                  </p>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {flagship.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    {flagship.features.slice(0, 4).map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <svg className="h-5 w-5 text-sky-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {f}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a
                      href={flagship.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-sky-400 hover:text-white"
                    >
                      {flagship.cta}
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                
                <div className="relative flex-shrink-0 lg:w-[400px]">
                  <div className="aspect-square relative flex items-center justify-center p-8 animate-float">
                    <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-3xl" />
                    <div className="relative glass aspect-square w-full rounded-[2rem] flex items-center justify-center p-12 overflow-hidden group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src="/instagenius-logo.svg"
                        alt="InstaGenius AI"
                        width={280}
                        height={280}
                        className="relative z-10 h-full w-full object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 group text-sm font-bold uppercase tracking-widest text-sky-400 hover:text-sky-300 transition-colors"
            >
              Discover all products 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why us / CTA strip */}
      <section className="relative border-t border-white/[0.05] py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="glass-dark relative overflow-hidden rounded-[3rem] p-12 sm:p-20 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] -ml-32 -mb-32" />
            
            <h2 className="relative font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl text-balance">
              Built to last. <span className="text-sky-400">Shipped on time.</span>
            </h2>
            <p className="relative mt-8 max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed">
              We focus on clarity, performance, and industrial-grade maintainability. 
              Whether it's a proprietary product or a bespoke solution, we deliver with uncompromising standards.
            </p>
            <div className="relative mt-12">
              <Link
                href="/about"
                className="glass-dark inline-block rounded-xl px-10 py-5 text-sm font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all active:scale-95"
              >
                Learn our story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
