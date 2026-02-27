import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';

export default function ProductsPage() {
  return (
    <div className="relative">
      <section className="border-b border-[var(--border)] bg-grid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our products
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Software and tools built by Tech Shekhada to help you grow and operate smarter.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-1">
            {products.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] transition hover:border-sky-500/30"
              >
                <div className="p-8 sm:p-10">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        {product.badge && (
                          <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs font-semibold text-sky-400">
                            {product.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                        {product.name}
                      </h2>
                      <p className="mt-2 text-slate-400">
                        {product.tagline}
                      </p>
                      <p className="mt-3 text-slate-500">
                        {product.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                            <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Link
                          href={`/products/${product.id}`}
                          className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-600"
                        >
                          Learn more
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                    <div className="flex-shrink-0 lg:w-64">
                      <div className="aspect-square rounded-xl bg-[var(--bg-card)] flex items-center justify-center border border-[var(--border)] p-4">
                        <Image
                          src="/instagenius-logo.svg"
                          alt={product.name}
                          width={140}
                          height={140}
                          className="h-full w-full object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
