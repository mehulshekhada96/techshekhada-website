import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Pricing Hub',
  description: `Access pricing for all ${SITE.name} industrial products.`,
};

export default function PricingHubPage() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
      <section className="py-16 sm:py-20 text-center w-full px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            Select <span className="gradient-text">Product Pricing</span>
          </h1>
          <p className="mt-6 text-slate-400 text-lg leading-relaxed">
            Our products use independent, dynamic credit-based models. 
            Choose a product below to view its specific pricing and usage details.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {/* InstaGenius Redirect */}
            <a
              href="https://ig.techshekhada.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 rounded-3xl border border-sky-500/30 bg-sky-500/5 p-10 transition-all hover:scale-105 hover:bg-sky-500/10 hover:shadow-[0_0_40px_-15px_rgba(14,165,233,0.3)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/20 text-sky-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">InstaGenius AI</h3>
                <p className="mt-2 text-sm text-slate-400">Content Automation & Growth</p>
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-sky-400 group-hover:text-sky-300">
                View Pricing →
              </span>
            </a>

            {/* SellerOS Redirect */}
            <a
              href="https://selleros.techshekhada.com/#pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 rounded-3xl border border-indigo-500/30 bg-indigo-500/5 p-10 transition-all hover:scale-105 hover:bg-indigo-500/10 hover:shadow-[0_0_40px_-15px_rgba(99,102,241,0.2)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-white">SellerOS</h3>
                <p className="mt-2 text-sm text-slate-400">E-commerce Fulfillment</p>
              </div>
              <span className="mt-4 text-xs font-bold uppercase tracking-widest text-indigo-400 group-hover:text-indigo-300">
                View Pricing →
              </span>
            </a>
          </div>

          <p className="mt-16 text-sm text-slate-500">
            Redirecting to native cloud infrastructure for secure billing.
          </p>
        </div>
      </section>
    </div>
  );
}
