import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Terms of Service',
  description: `Terms of Service for ${SITE.name}.`,
};

export default function TermsPage() {
  return (
    <div className="relative">
      <section className="border-b border-[var(--border)] bg-grid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            Last updated: March 31, 2026
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none space-y-8 text-slate-400">
            <div>
              <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
              <p className="mt-4 leading-relaxed">
                By accessing or using our Service, you agree to be bound by these Terms of Service. 
                If you disagree with any part of the terms, you may not access the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">2. Use of License</h2>
              <p className="mt-4 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) 
                on Tech Shekhada's website for personal, non-commercial transitory viewing only.
              </p>
              <p className="mt-2 leading-relaxed">
                You may not:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Modify or copy the materials.</li>
                <li>Use the materials for any commercial purpose (unless explicitly permitted).</li>
                <li>Attempt to decompile or reverse engineer any software.</li>
                <li>Remove any copyright or other proprietary notations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">3. User Accounts</h2>
              <p className="mt-4 leading-relaxed">
                When you create an account with us, you must provide us with information that is accurate, 
                complete, and current at all times. Failure to do so constitutes a breach of the Terms, 
                which may result in immediate termination of your account on our Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">4. Termination</h2>
              <p className="mt-4 leading-relaxed">
                We may terminate or suspend access to our Service immediately, without prior notice or liability, 
                for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">5. Governing Law</h2>
              <p className="mt-4 leading-relaxed">
                These Terms shall be governed and construed in accordance with the laws of India, 
                without regard to its conflict of law provisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:support@techshekhada.com" className="text-sky-400 hover:underline">support@techshekhada.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
