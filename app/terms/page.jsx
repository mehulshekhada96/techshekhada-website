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
                By accessing or using any website, software, or application operated by Tech Shekhada Private Limited 
                (&quot;Tech Shekhada&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), including <strong className="text-white">InstaGenius™</strong> and <strong className="text-white">SellerOS</strong>, 
                you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">2. Intellectual Property & Trademarks</h2>
              <p className="mt-4 leading-relaxed">
                All contents, features, functionality, underlying source code, algorithms, and designs of our services 
                are the exclusive property of <strong className="text-white">Tech Shekhada Private Limited</strong> and are protected by applicable intellectual property, copyright, and trademark laws.
              </p>
              <p className="mt-2 leading-relaxed">
                <strong className="text-sky-400">InstaGenius™</strong> is a registered trademark of Tech Shekhada Private Limited. 
                Any unauthorized use, copying, imitation, or distribution of our trademarks, logos, or proprietary software is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">3. Use of License</h2>
              <p className="mt-4 leading-relaxed">
                Permission is granted to temporarily access the materials on Tech Shekhada Private Limited's websites 
                solely for authorized personal or internal business use.
              </p>
              <p className="mt-2 leading-relaxed">
                You may not:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Modify, copy, or create derivative works of the materials or platforms.</li>
                <li>Attempt to decompile, reverse engineer, or extract source code from any software.</li>
                <li>Remove any copyright, trademark, or proprietary notations from the materials.</li>
                <li>Transfer or sublicense the software or resell access without express written authorization.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">4. User Accounts</h2>
              <p className="mt-4 leading-relaxed">
                When you create an account with us, you must provide information that is accurate, complete, and current at all times. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">5. Governing Law & Jurisdiction</h2>
              <p className="mt-4 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of India. 
                Any legal actions or disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in Surat, Gujarat, India.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">6. Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                If you have questions about these Terms, please contact:
              </p>
              <div className="mt-3 text-slate-300 space-y-1">
                <p className="font-semibold text-white">Tech Shekhada Private Limited</p>
                <p>CIN: {SITE.cin}</p>
                <p>Corporate Office: {SITE.officeAddress}</p>
                <p>Registered Office: {SITE.registeredAddress}</p>
                <p>Phone: {SITE.phone}</p>
                <p>Email: <a href="mailto:support@techshekhada.com" className="text-sky-400 hover:underline">support@techshekhada.com</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
