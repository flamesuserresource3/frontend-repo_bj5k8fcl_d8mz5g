import React from 'react';
import { PieChart, LineChart, ShieldCheck, Zap, Bell, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: PieChart,
    title: 'Unified Portfolio View',
    desc: 'Aggregate wallets and exchanges into a single, real‑time dashboard. Multi‑chain support out of the box.',
    detail: 'Connect popular chains and CEX accounts in minutes to see your true net worth and allocation.'
  },
  {
    icon: LineChart,
    title: 'Advanced Analytics',
    desc: 'Alpha‑grade metrics including PnL, risk, Sharpe, drawdown, and smart rebalancing signals.',
    detail: 'Performance is tracked per asset and per source with benchmark comparisons and time‑weighted returns.'
  },
  {
    icon: ShieldCheck,
    title: 'Security First',
    desc: 'Non‑custodial by design with read‑only keys and bank‑grade encryption to protect your data.',
    detail: 'SOC2‑inspired controls and granular key permissions keep your accounts safe.'
  },
  {
    icon: Zap,
    title: 'Automations',
    desc: 'Rule‑based rebalancing, price alerts, and scheduled exports to keep you ahead of the market.',
    detail: 'Set thresholds and schedules, then let Cryptvest handle the busywork while you focus on strategy.'
  },
];

const metricCards = [
  { icon: BarChart3, label: '24h PnL', value: '+$2,340', tone: 'text-emerald-600' },
  { icon: Bell, label: 'Active Alerts', value: '7', tone: 'text-slate-900' },
  { icon: PieChart, label: 'BTC Allocation', value: '42%', tone: 'text-slate-900' },
];

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Why Cryptvest</h2>
          <p className="mt-3 text-slate-600">
            Premium tools built for long‑term investors and active traders alike — beautifully simple, relentlessly powerful.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc, detail }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
              <p className="mt-2 text-xs text-slate-500">{detail}</p>
            </div>
          ))}
        </div>

        {/* sample metrics strip to feel "live" */}
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {metricCards.map(({ icon: Icon, label, value, tone }) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
                <Icon className="h-5 w-5 text-slate-400" />
              </div>
              <div className={`mt-2 text-2xl font-bold ${tone}`}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
