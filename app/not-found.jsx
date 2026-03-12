import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4" role="alert">
      <h1 className="font-display text-4xl font-bold text-white">404</h1>
      <p className="mt-2 text-slate-400">This page could not be found.</p>
      <Link
        href="/"
        className="mt-6 text-sm font-medium text-sky-400 hover:text-sky-300"
      >
        Back to home →
      </Link>
    </div>
  );
}
