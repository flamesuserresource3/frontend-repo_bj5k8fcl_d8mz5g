import React from 'react';
import { Crown, Star, Twitter, Github, Mail } from 'lucide-react';

export default function BrandHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="group inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-sky-500 text-white shadow-sm ring-1 ring-black/5">
            <Crown className="h-4 w-4" />
          </span>
          <div>
            <div className="text-lg font-bold tracking-tight text-slate-900">Cryptvest</div>
            <div className="-mt-1 text-[10px] font-medium uppercase tracking-widest text-slate-500">Premium Crypto Suite</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-700 sm:flex">
          <a href="#features" className="hover:text-slate-900">Features</a>
          <a href="#pricing" className="hover:text-slate-900">Pricing</a>
          <a href="#demo" className="hover:text-slate-900">Demo</a>
          <a href="#early" className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Get Early Access</a>
        </nav>
      </div>
    </div>
  );
}
