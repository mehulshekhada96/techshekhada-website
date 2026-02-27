import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';

export default function HomePage() {
  const flagship = products[0];

  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative bg-grid min-h-[85vh] flex flex-col items-center justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
            Thinking Tech Solutions?
            <br />
            <span className="gradient-text">Think Tech Shekhada.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 sm:text-xl max-w-2xl mx-auto animate-slide-up">
            We build products and solutions that scale—from AI-powered growth tools to custom software.
            Quality, clarity, and delivery you can count on.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-slide-up">
            <Link
              href="/products"
              className="inline-flex items-center rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
            >
              View products
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-lg border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-slate-300 transition hover:border-slate-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* Products highlight */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Our products
            </h2>
            <p className="mt-3 text-slate-400">
              Tools built to help you grow and operate smarter.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
            <article className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 transition hover:border-sky-500/30 glow-ring sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">
                      {flagship.badge}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                    {flagship.name}
                  </h3>
                  <p className="mt-2 text-slate-400">
                    {flagship.tagline}
                  </p>
                  <p className="mt-3 text-sm text-slate-500">
                    {flagship.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {flagship.features.slice(0, 4).map((f) => (
                      <li key={f} className="rounded-md bg-slate-800/80 px-2 py-1 text-xs text-slate-300">
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <a
                      href={flagship.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                    >
                      {flagship.cta}
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="flex-shrink-0 lg:w-72">
                  <div className="aspect-square rounded-xl bg-[var(--bg-card)] flex items-center justify-center border border-[var(--border)] p-4">
                    <Image
                      src="/instagenius-logo.svg"
                      alt="InstaGenius AI"
                      width={160}
                      height={160}
                      className="h-full w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/products"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* Why us / CTA strip */}
      <section className="border-t border-[var(--border)] bg-[var(--bg-primary)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Built to last. Shipped on time.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-slate-400">
              We focus on clarity, performance, and maintainability. Whether it's a product or a custom solution,
              we deliver with the same standards.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
