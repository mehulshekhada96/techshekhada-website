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


          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-[var(--border)] pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Tech Shekhada. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
