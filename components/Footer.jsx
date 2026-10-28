import Link from 'next/link';
import Image from 'next/image';
import { SITE } from '@/lib/site';

const links = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)] text-slate-400">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand & Corporate Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 focus:outline-none group">
              <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden rounded-xl border border-amber-500/20 bg-slate-900/60 p-0.5 shadow-md shadow-amber-500/5 group-hover:border-amber-500/40 transition">
                <Image
                  src="/techshekhada-icon.png"
                  alt="Tech Shekhada Private Limited"
                  width={88}
                  height={88}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors">
                  TECH SHEKHADA
                </span>
                <span className="text-[11px] font-semibold text-slate-300 tracking-wider">
                  PRIVATE LIMITED
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Industrial-grade AI products and scalable software solutions built for creators and enterprises worldwide.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              DPIIT Registered Startup • Startup India
            </div>

            <div className="text-xs text-slate-500 font-mono">
              CIN: {SITE.cin}
            </div>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-4 space-y-3 text-sm">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Offices & Contact</span>
            
            <div className="space-y-2 text-slate-400">
              <p className="flex items-start gap-2">
                <svg className="h-4 w-4 mt-0.5 text-amber-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{SITE.officeAddress}</span>
              </p>
              
              <p className="flex items-center gap-2">
                <svg className="h-4 w-4 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={`tel:${SITE.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {SITE.phone}
                </a>
              </p>

              <p className="flex items-center gap-2">
                <svg className="h-4 w-4 text-sky-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
                  {SITE.email}
                </a>
              </p>

              <div className="pt-2 flex flex-col gap-1.5 text-xs">
                <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">Follow on Instagram</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-pink-500/30 bg-pink-500/10 px-2.5 py-1 text-xs text-pink-300 hover:bg-pink-500/20 hover:text-white transition"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @tech_shekhada
                  </a>
                  <a
                    href={SITE.instaGeniusInstagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-pink-500/30 bg-pink-500/10 px-2.5 py-1 text-xs text-pink-300 hover:bg-pink-500/20 hover:text-white transition"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @instagenius__ai
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">Regd. Office:</span> {SITE.registeredAddress}
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 flex gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Navigation</span>
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
              <span className="text-xs font-bold uppercase tracking-widest text-slate-300">Legal</span>
              <Link href="/privacy" className="text-sm text-slate-400 transition-colors hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 transition-colors hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Intellectual Property & Trademark Strip */}
        <div className="mt-10 border-t border-[var(--border)] pt-6 text-xs text-slate-500 space-y-2">
          <p>
            <strong className="text-slate-400">Trademark Notice:</strong> <span className="text-sky-400 font-semibold">InstaGenius™</span> is a registered trademark of <strong className="text-slate-400">Tech Shekhada Private Limited</strong>. All rights reserved. Other product names and logos mentioned herein are trademarks or trade names of their respective owners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.05]">
            <p>© {new Date().getFullYear()} Tech Shekhada Private Limited. All rights reserved.</p>
            <p className="text-[11px] text-slate-600">Built with precision & high-availability cloud architecture.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
