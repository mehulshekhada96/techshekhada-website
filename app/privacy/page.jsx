import { SITE } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy',
  description: `Privacy Policy for ${SITE.name}. How we handle your data.`,
};

export default function PrivacyPage() {
  return (
    <div className="relative">
      <section className="border-b border-[var(--border)] bg-grid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Privacy Policy
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
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p className="mt-4 leading-relaxed">
                Welcome to Tech Shekhada. We respect your privacy and are committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our 
                website (regardless of where you visit it from) and tell you about your privacy rights and how 
                the law protects you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">2. Data We Collect</h2>
              <p className="mt-4 leading-relaxed">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">3. How We Use Your Data</h2>
              <p className="mt-4 leading-relaxed">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>To provide and maintain our Service.</li>
                <li>To notify you about changes to our Service.</li>
                <li>To provide customer support.</li>
                <li>To gather analysis or valuable information so that we can improve our Service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">4. Data Security</h2>
              <p className="mt-4 leading-relaxed">
                We have put in place appropriate security measures to prevent your personal data from being accidentally 
                lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access 
                to your personal data to those employees, agents, contractors and other third parties who have a 
                business need to know.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">5. Contact Us</h2>
              <p className="mt-4 leading-relaxed">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
