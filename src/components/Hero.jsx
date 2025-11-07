import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/vi0ijCQQJTRFc8LA/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlays for readability (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center sm:pt-32 lg:pt-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
          <Shield className="h-4 w-4 text-emerald-600" />
          <span className="text-xs font-medium text-slate-700">Bank‑grade security • Non‑custodial insights</span>
        </div>

        <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-6xl">
          Cryptvest — Premium Crypto Portfolio Management
        </h1>
        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
          Track, analyze, and optimize your digital assets with real‑time intelligence, automated rebalancing, and tax‑ready reports.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-6 py-3 text-white shadow-lg shadow-slate-900/10 transition hover:bg-slate-800"
          >
            <Rocket className="h-5 w-5" />
            Get Started
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/80 px-6 py-3 text-slate-900 ring-1 ring-slate-200 backdrop-blur transition hover:bg-white"
          >
            Explore Features
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
