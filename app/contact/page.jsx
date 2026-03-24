'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSending(true);
    const form = e.target;
    const payload = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      subject: form.subject?.value?.trim() || '',
      message: form.message.value.trim(),
    };
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }
      setSubmitted(true);
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="relative">
      <section className="border-b border-[var(--border)] bg-grid py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-slate-400 text-lg">
            Have a question about our products or want to share feedback? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold text-white">
                Contact information
              </h2>
              <p className="mt-2 text-slate-400">
                For general inquiries or feedback, please reach out via the form or email us directly at <a href="mailto:support@techshekhada.com" className="text-sky-400 hover:underline">support@techshekhada.com</a>.
              </p>
              <div className="mt-8 space-y-4 text-slate-400">
                <p>
                  <strong className="text-slate-300">Product Support</strong><br />
                  If you're using InstaGenius AI or SellerOS and need assistance, please mention your account details in the message.
                </p>
                <p>
                  We typically respond within 24–48 hours on business days.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-8">
              {submitted ? (
                <div className="rounded-lg bg-sky-500/20 p-6 text-center">
                  <p className="font-semibold text-sky-400">Message sent successfully.</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Thank you for reaching out. Our team will review your message and get back to you soon.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-sm font-medium text-sky-400 hover:text-sky-300"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <p className="rounded-lg bg-red-500/20 px-4 py-3 text-sm text-red-400">
                      {error}
                    </p>
                  )}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-600 bg-[var(--bg-secondary)] px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-600 bg-[var(--bg-secondary)] px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300">
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="mt-2 block w-full rounded-lg border border-slate-600 bg-[var(--bg-secondary)] px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      placeholder="Feedback, Support, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-2 block w-full rounded-lg border border-slate-600 bg-[var(--bg-secondary)] px-4 py-3 text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full rounded-lg bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:opacity-50"
                  >
                    {sending ? 'Sending...' : 'Send message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
