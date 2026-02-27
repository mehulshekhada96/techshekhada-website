import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <div className="relative">
      <section className="border-b border-[var(--border)] bg-grid py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="text-sm font-medium text-slate-400 hover:text-white"
          >
            ← Products
          </Link>
          <div className="mt-4 flex items-center gap-3">
            {product.badge && (
              <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">
                {product.badge}
              </span>
            )}
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            {product.tagline}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-slate-300 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          <h2 className="mt-12 font-display text-xl font-bold text-white">
            Features
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-1 md:grid-cols-2">
            {product.features.map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-4 py-3 text-slate-300">
                <span className="h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-14 rounded-2xl border border-sky-500/30 bg-sky-500/10 p-8 text-center">
            <h3 className="font-display text-lg font-bold text-white">
              Ready to try {product.name}?
            </h3>
            <p className="mt-2 text-slate-400">
              Sign up and start creating with AI in minutes.
            </p>
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              {product.cta}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
