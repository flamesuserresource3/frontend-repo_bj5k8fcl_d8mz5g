import React from 'react';
import { Check, Crown, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Essentials',
    price: '$0',
    cadence: 'forever',
    features: [
      'Unified portfolio view',
      'Manual wallet entries',
      'Basic performance metrics',
      'Email alerts (limited)'
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$29',
    cadence: '/mo',
    features: [
      'All Essentials features',
      'Unlimited exchanges & wallets',
      'Smart rebalancing & automations',
      'Tax‑ready PnL exports',
      'Priority support'
    ],
    cta: 'Go Premium',
    highlighted: true,
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free, upgrade when you’re ready to unlock pro‑grade automation and analytics.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border ${tier.highlighted ? 'border-slate-900 bg-white shadow-xl' : 'border-slate-200 bg-white shadow-sm'} p-8`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                  <Crown className="h-4 w-4" /> Best Value
                </div>
              )}
              <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">{tier.cadence}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-slate-700">
                    <Check className="mt-0.5 h-5 w-5 text-emerald-600" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition ${tier.highlighted ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 ring-1 ring-slate-200 hover:bg-slate-50'}`}
              >
                {tier.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
