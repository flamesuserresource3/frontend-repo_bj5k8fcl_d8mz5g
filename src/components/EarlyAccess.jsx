import React, { useState } from 'react';
import { Mail, Check } from 'lucide-react';

const apiBase = import.meta.env.VITE_BACKEND_URL || '';

export default function EarlyAccess() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [message, setMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');
    try {
      const res = await fetch(`${apiBase}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'early-section' })
      });
      if (!res.ok) throw new Error('Failed to submit');
      setStatus('success');
      setEmail('');
    } catch (e) {
      setStatus('error');
      setMessage(e.message);
    }
  };

  return (
    <section id="early" className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-sky-500 to-teal-400 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.25),transparent_40%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get Early Access</h2>
          <p className="mt-2 text-white/80">Join the waitlist for premium portfolio automation, alerts, and deep analytics.</p>

          <form onSubmit={submit} className="mt-8 flex items-center gap-3">
            <div className="relative w-full">
              <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/70" size={18} />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@proton.me"
                className="h-12 w-full rounded-xl border border-white/20 bg-white/15 pl-10 pr-4 text-white placeholder-white/60 outline-none ring-0 backdrop-blur transition focus:border-white/40"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 font-medium text-slate-900 transition hover:bg-white/90"
            >
              {status === 'loading' ? 'Submitting…' : 'Join Waitlist'}
            </button>
          </form>

          {status === 'success' && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm">
              <Check size={16} /> You're on the list! We'll reach out soon.
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 text-sm">{message}</div>
          )}
        </div>
      </div>
    </section>
  );
}
