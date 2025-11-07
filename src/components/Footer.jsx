import React from 'react';
import { Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900">Cryptvest</h3>
            <p className="mt-1 text-sm text-slate-600">Premium crypto portfolio management for investors and pros.</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" aria-label="GitHub" className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Email" className="rounded-md p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Cryptvest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
