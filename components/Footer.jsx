import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link href="/" className="inline-block focus:outline-none">
              <Image
                src="/logo.png"
                alt="Tech Shekhada"
                width={200}
                height={200}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-2 max-w-sm text-sm text-slate-400">
              Premium AI Products for Modern Growth.
            </p>
            <div className="mt-4 text-sm text-slate-500">
              <a href="mailto:support@techshekhada.com" className="hover:text-sky-400 transition-colors">
                support@techshekhada.com
              </a>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-sky-400/80">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500 animate-pulse" />
              Infrastructure powered by Google Cloud Vertex AI & Gemini 3.1 Pro
            </div>


          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Navigation</span>
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Legal</span>
              <Link href="/privacy" className="text-sm text-slate-400 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </nav>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Tech Shekhada. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
