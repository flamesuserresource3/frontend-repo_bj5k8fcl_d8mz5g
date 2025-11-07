import React, { useEffect, useMemo, useState } from 'react';
import { PieChart, BarChart3, ArrowRight, Zap, ShieldCheck } from 'lucide-react';

const apiBase = import.meta.env.VITE_BACKEND_URL || '';

const MiniStat = ({ label, value, delta }) => (
  <div className="rounded-xl bg-white/70 p-4 shadow-sm ring-1 ring-black/5 backdrop-blur">
    <div className="text-xs uppercase tracking-wide text-slate-500">{label}</div>
    <div className="mt-1 flex items-end gap-2">
      <div className="text-2xl font-semibold">{value}</div>
      {typeof delta === 'number' && (
        <span className={`text-xs font-medium ${delta >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
          {delta >= 0 ? '+' : ''}{delta}%
        </span>
      )}
    </div>
  </div>
);

export default function DashboardDemo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDemo = async () => {
      try {
        const res = await fetch(`${apiBase}/api/demo-portfolio`);
        if (!res.ok) throw new Error('Failed to load demo data');
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDemo();
  }, []);

  const total = data?.stats?.total_value || 0;

  return (
    <section id="demo" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Live Demo Dashboard</h2>
            <p className="mt-2 max-w-xl text-slate-600">A taste of portfolio insights you get with Cryptvest — allocations, growth, and risk protection.</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
              <Zap className="h-3.5 w-3.5" /> Real-time feel
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-600/20">
              <ShieldCheck className="h-3.5 w-3.5" /> Secure by design
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: Pie allocations */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-900">
                <PieChart className="h-5 w-5" />
                <h3 className="font-semibold">Allocations</h3>
              </div>
              <span className="text-xs text-slate-500">Total ${total.toLocaleString()}</span>
            </div>

            <div className="mt-6 grid grid-cols-5 items-center gap-4">
              {loading && <div className="col-span-5 text-sm text-slate-500">Loading...</div>}
              {error && <div className="col-span-5 text-sm text-rose-600">{error}</div>}

              {!loading && !error && data?.allocations?.map((a) => (
                <div key={a.asset} className="col-span-1 flex flex-col items-center">
                  <div className="relative">
                    <svg width="70" height="70" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="16" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-slate-800">
                      {a.percent}%
                    </div>
                  </div>
                  <div className="mt-2 text-xs font-medium text-slate-600">{a.asset}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle: Equity curve bars */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div className="flex items-center gap-2 text-slate-900">
              <BarChart3 className="h-5 w-5" />
              <h3 className="font-semibold">Equity Curve</h3>
            </div>
            <div className="mt-6 flex h-40 items-end gap-2">
              {loading && <div className="text-sm text-slate-500">Loading...</div>}
              {!loading && data?.equity_curve?.map((p, idx) => {
                const max = Math.max(...data.equity_curve.map((x) => x.v));
                const h = Math.round((p.v / max) * 100);
                return (
                  <div key={idx} className="flex w-full flex-col items-center gap-2">
                    <div className="w-full rounded-t-md bg-gradient-to-t from-slate-300 to-slate-600" style={{ height: `${h}%` }} />
                    <div className="text-xs text-slate-500">{p.t}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 gap-4">
            <MiniStat label="Total Value" value={`$${total.toLocaleString()}`} />
            <MiniStat label="24h" value={`${data?.stats?.one_day ?? 0}%`} delta={data?.stats?.one_day ?? 0} />
            <MiniStat label="7d" value={`${data?.stats?.one_week ?? 0}%`} delta={data?.stats?.one_week ?? 0} />
            <MiniStat label="30d" value={`${data?.stats?.one_month ?? 0}%`} delta={data?.stats?.one_month ?? 0} />
            <MiniStat label="Top Performer" value={data?.stats?.best_asset || '-'} />
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between rounded-2xl bg-slate-900 p-6 text-white">
          <div>
            <h4 className="text-lg font-semibold">Ready to see your own data?</h4>
            <p className="text-slate-300">Connect a wallet or exchange. We never take custody.</p>
          </div>
          <div className="flex gap-3">
            <ConnectButton type="wallet" provider="MetaMask" />
            <ConnectButton type="exchange" provider="Binance" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectButton({ type, provider }) {
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${apiBase}/connect`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type, provider, note: 'demo' })
      });
      if (!res.ok) throw new Error('Failed to create request');
      setDone(true);
      setTimeout(() => setDone(false), 2500);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-medium text-slate-900 transition hover:bg-slate-100 ${loading ? 'opacity-70' : ''}`}
      disabled={loading}
    >
      {provider} {done ? '✓' : ''}
    </button>
  );
}
