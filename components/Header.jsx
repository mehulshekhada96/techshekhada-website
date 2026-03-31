'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 focus:outline-none">
          <Image
            src="/logo.png"
            alt="Tech Shekhada"
            width={200}
            height={200}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                pathname === href
                  ? 'text-sky-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="mobile-menu-button flex h-10 w-10 items-center justify-center rounded-lg border border-slate-600 text-slate-300 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border)] bg-[var(--bg-secondary)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium ${
                  pathname === href ? 'bg-sky-500/20 text-sky-400' : 'text-slate-300'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
