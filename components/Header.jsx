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
        <Link href="/" className="group flex items-center gap-3 focus:outline-none">
          <div className="relative h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 overflow-hidden rounded-xl border border-amber-500/20 bg-slate-900/60 p-0.5 shadow-md shadow-amber-500/5 transition group-hover:border-amber-500/40">
            <Image
              src="/techshekhada-icon.png"
              alt="Tech Shekhada Private Limited"
              width={88}
              height={88}
              className="h-full w-full object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-base sm:text-lg font-bold tracking-tight text-white transition group-hover:text-amber-300">
                TECH SHEKHADA
              </span>
              <span className="rounded bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.2 text-[9px] font-bold text-amber-400 uppercase tracking-wider">
                PVT LTD
              </span>
            </div>
            <span className="text-[10px] font-semibold text-sky-400 tracking-wider uppercase">
              DPIIT Registered Startup
            </span>
          </div>
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
