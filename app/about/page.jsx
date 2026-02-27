export default function AboutPage() {
  return (
    <div className="relative">
      <section className="border-b border-[var(--border)] bg-grid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            About Tech Shekhada
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            We build tech solutions that scale—with clarity, quality, and delivery you can count on.
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
                Tech Shekhada is a technology company focused on building products and solutions
                that help businesses and creators grow. From AI-powered tools like InstaGenius AI
                to custom software and integrations, we combine clear architecture
                and a focus on user experience to deliver results.
              </p>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Our tagline says it all: <strong className="text-slate-300">Thinking Tech Solutions? Think Tech Shekhada.</strong>
                Whether you need a SaaS product, an API, or a full platform, we approach every project
                with the same standards—reliability, performance, and maintainability.
              </p>
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                What we do
              </h2>
              <ul className="mt-4 space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">Product development</strong> — We ship products from idea to launch, with clear roadmaps and scalable architecture.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">AI & automation</strong> — We integrate cutting-edge AI for content, analytics, and workflow automation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">Integrations</strong> — We connect your favorite tools and platforms so everything works together.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-sky-500 flex-shrink-0" />
                  <span><strong className="text-slate-300">Support & iteration</strong> — We don't stop at launch. We monitor, improve, and extend based on real usage.</span>
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
