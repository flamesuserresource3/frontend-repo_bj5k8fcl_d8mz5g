import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">Cryptvest</a>
          <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#cta" className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Get Started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <section id="cta" className="bg-slate-900 py-16 text-white">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-2xl font-bold">Start your premium portfolio journey</h3>
                <p className="mt-2 text-slate-300">Connect wallets, sync exchanges, and unlock automation in minutes.</p>
              </div>
              <a href="#pricing" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100">View Plans</a>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default App;
