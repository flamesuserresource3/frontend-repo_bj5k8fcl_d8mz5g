import React from 'react';
import BrandHeader from './components/BrandHeader';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardDemo from './components/DashboardDemo';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import EarlyAccess from './components/EarlyAccess';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <BrandHeader />

      <main>
        <Hero />
        <Features />
        <DashboardDemo />
        <Pricing />
        <Testimonials />
        <section id="cta" className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold">Start your premium portfolio journey</h3>
                <p className="mt-2 text-slate-300">Connect wallets, sync exchanges, and unlock automation in minutes.</p>
              </div>
              <a href="#early" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100">Get Early Access</a>
            </div>
          </div>
        </section>
        <EarlyAccess />
        <Footer />
      </main>
    </div>
  );
};

export default App;
