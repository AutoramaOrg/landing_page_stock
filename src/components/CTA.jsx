import React from 'react';
import { ChevronsRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="section-shell py-16">
      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <div className="cta-panel grid gap-8 p-8 md:grid-cols-[1.1fr_.9fr] md:items-center md:p-12">
          <div className="flex items-center gap-7">
            <div className="hidden h-28 w-28 shrink-0 bg-[linear-gradient(45deg,#ff1e1e_25%,transparent_25%,transparent_50%,#ff1e1e_50%,#ff1e1e_75%,transparent_75%)] bg-[length:26px_26px] opacity-70 md:block" />
            <div>
              <h2 className="font-bebas text-6xl uppercase leading-[.88] tracking-[.055em] text-white md:text-7xl">
                Ações limitadas.
                <span className="block text-racing-red">Entre agora.</span>
              </h2>
              <p className="mt-5 max-w-2xl font-rajdhani text-lg font-semibold leading-relaxed text-white/[.72]">
                Comece com 25 ações e garanta dividendos mensais, possibilidade de revenda e acesso antecipado ao jogo.
              </p>
            </div>
          </div>
          <a href="#pacotes" className="red-button pulse-glow justify-center px-9 py-6 text-lg md:justify-self-end">
            Quero comprar ações
            <ChevronsRight size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
