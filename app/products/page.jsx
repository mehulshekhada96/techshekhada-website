import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import { SITE, absoluteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

const productsUrl = `${SITE.baseUrl}/products`;

export const metadata = {
  title: 'Our Products',
  description:
    'Industrial-grade products by Tech Shekhada. Featuring InstaGenius AI for Instagram growth and SellerOS for e-commerce efficiency. Built for creators and modern businesses.',
  openGraph: {
    title: 'Products | Tech Shekhada',
    description:
      'Premium AI tools and e-commerce efficiency engines. Explore InstaGenius AI and SellerOS by Tech Shekhada.',
    url: productsUrl,
    images: [{ url: absoluteUrl(SITE.ogImagePath), width: 1200, height: 630, alt: SITE.name }],
  },
  alternates: { canonical: productsUrl },
  robots: { index: true, follow: true },
};

export default function ProductsPage() {
  return (
    <div className="relative">
      <BreadcrumbJsonLd items={[{ name: 'Home', url: SITE.baseUrl }, { name: 'Products', url: productsUrl }]} />
      <section className="border-b border-[var(--border)] bg-grid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Our products
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400">
            Industrial-grade tools meticulously crafted by Tech Shekhada to help you grow and operate with precision.
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
                          src={product.logoPath || '/instagenius-logo.svg'}
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

      {/* Global Infrastructure Section */}
      <section className="border-t border-[var(--border)] bg-slate-950/40 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[3rem] border border-sky-500/20 bg-sky-500/5 p-12 sm:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-sky-500/10 rounded-full blur-[100px] -ml-32 -mt-32" />
            <div className="relative">
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Globally Available. Industrial Scale.
              </h2>
              <p className="mt-6 mx-auto max-w-2xl text-slate-400 text-lg leading-relaxed">
                Tech Shekhada products are powered by world-class cloud infrastructure. 
                Our digital-native architecture ensures high availability, data security, 
                and rapid performance for users across the globe.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                <div>
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="mt-1 text-sm font-medium text-sky-400 uppercase tracking-widest">Uptime</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">Global</div>
                  <div className="mt-1 text-sm font-medium text-sky-400 uppercase tracking-widest">CDN Reach</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">AES-256</div>
                  <div className="mt-1 text-sm font-medium text-sky-400 uppercase tracking-widest">Data Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
