import React from 'react';
import { ChevronsRight } from 'lucide-react';

const links = [
  { label: 'O JOGO', href: '#o-jogo' },
  { label: 'AÇÕES', href: '#acoes' },
  { label: 'COMO FUNCIONA', href: '#como-funciona' },
  { label: 'FAQ', href: '#faq' },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-racing-blue/20 bg-racing-black/[.78] shadow-blueGlow backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <a href="#hero" className="group flex items-center gap-3">
          <span className="relative flex h-9 w-11 items-center justify-center overflow-hidden border-l-4 border-racing-red bg-racing-blue/10">
            <span className="checkered absolute inset-0 opacity-90" />
          </span>
          <span className="leading-none">
            <span className="block font-orbitron text-xl font-black uppercase tracking-[.08em] text-white md:text-2xl">
              Autorama
            </span>
            <span className="block -mt-1 text-right font-rajdhani text-sm font-bold uppercase tracking-[.34em] text-white/[.85]">
              Racing
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link font-rajdhani text-sm font-bold uppercase tracking-[.22em] text-white/[.78] transition hover:text-racing-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#pacotes" className="red-button hidden px-7 py-4 text-sm md:inline-flex">
          Comprar Ações
          <ChevronsRight size={19} />
        </a>
      </nav>
      <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto border-t border-racing-blue/10 px-5 py-3 lg:hidden">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="shrink-0 border border-racing-blue/20 bg-racing-navy/45 px-4 py-2 font-rajdhani text-xs font-bold uppercase tracking-[.14em] text-white/75 backdrop-blur transition hover:border-racing-blue hover:text-racing-blue"
          >
            {link.label}
          </a>
        ))}
      </div>
    </header>
  );
}
