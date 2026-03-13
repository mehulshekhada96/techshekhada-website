import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { SITE, absoluteUrl } from '@/lib/site';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: 'Product Not Found' };
  const url = `${SITE.baseUrl}/products/${id}`;
  const imageUrl = product.fullLogoPath ? absoluteUrl(product.fullLogoPath) : product.logoPath ? absoluteUrl(product.logoPath) : absoluteUrl(SITE.ogImagePath);
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Tech Shekhada`,
      description: product.description,
      url,
      type: 'website',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${product.name} – ${product.tagline}` }],
    },
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  const productUrl = `${SITE.baseUrl}/products/${product.id}`;
  const productImage = product.logoPath ? absoluteUrl(product.fullLogoPath ?? product.logoPath) : absoluteUrl(SITE.ogImagePath);
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    description: product.description,
    url: productUrl,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: { '@type': 'Offer', url: product.href },
    featureList: product.features,
    screenshot: productImage,
    image: productImage,
  };

  const breadcrumbItems = [
    { name: 'Home', url: SITE.baseUrl },
    { name: 'Products', url: `${SITE.baseUrl}/products` },
    { name: product.name, url: productUrl },
  ];

  return (
    <div className="relative">
      <BreadcrumbJsonLd items={breadcrumbItems} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <article itemScope itemType="https://schema.org/SoftwareApplication">
        <section className="border-b border-[var(--border)] bg-grid py-12 sm:py-16" aria-label="Product header">
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
          {(product.fullLogoPathDark ?? product.fullLogoPath) ? (
            <div className="mt-4">
              <Image
                src={product.fullLogoPathDark ?? product.fullLogoPath}
                alt={product.name}
                width={320}
                height={96}
                className="h-12 w-auto sm:h-14"
              />
            </div>
          ) : (
            <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
              {product.name}
            </h1>
          )}
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            {product.tagline}
          </p>
        </div>
      </section>

        <section className="py-16 sm:py-20" aria-label="Product details">
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
              {product.ctaSubtitle ?? 'Sign up and start creating with AI in minutes.'}
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
      </article>
    </div>
  );
}
