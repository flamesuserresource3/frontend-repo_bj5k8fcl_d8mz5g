import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex M.',
    role: 'Algotrader',
    quote:
      'Cryptvest gives me a clean signal for rebalancing and an honest view of risk. It replaced three tools in my stack.',
  },
  {
    name: 'Priya K.',
    role: 'Long‑term Investor',
    quote:
      'I finally have a single source of truth across wallets and exchanges. The tax exports saved me hours.',
  },
  {
    name: 'Daniel R.',
    role: 'Fund Ops',
    quote:
      'Security‑first architecture and read‑only keys made compliance sign‑off straightforward.',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Trusted by discerning investors</h2>
          <p className="mt-3 text-slate-600">What early users are saying</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-slate-500">
                — {t.name}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
