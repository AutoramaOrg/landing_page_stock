import React from 'react';
import { Disc3, Instagram, Twitter, Youtube } from 'lucide-react';

const nav = ['O Jogo', 'Ações', 'Como Funciona', 'FAQ'];
const support = ['Central de Ajuda', 'Contato', 'Termos de Uso', 'Política de Privacidade'];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-racing-blue/20 bg-black/60 px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <a href="#home" className="inline-flex">
            <img
              src="/assets/autorama_white.png"
              alt="Autorama Racing"
              className="h-10 w-auto max-w-[170px] object-contain opacity-95"
            />
          </a>
          <p className="mt-5 max-w-xs font-rajdhani text-sm font-semibold leading-relaxed text-white/[.56]">
            © 2025 Autorama Racing. Todos os direitos reservados.
          </p>
          <div className="mt-7 flex gap-4 text-white/[.72]">
            <Instagram size={20} />
            <Youtube size={20} />
            <Twitter size={20} />
            <Disc3 size={20} />
          </div>
        </div>
        <FooterColumn title="Navegação" items={nav} />
        <FooterColumn title="Suporte" items={support} />
        <div>
          <h3 className="font-bebas text-2xl uppercase tracking-[.08em] text-white">Autorama Racing</h3>
          <p className="mt-3 font-rajdhani text-base font-semibold leading-relaxed text-white/[.62]">
            Invista no futuro das corridas. Faça parte do ecossistema.
          </p>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 font-rajdhani text-sm font-semibold text-white/[.42]">
        © 2025 Autorama Racing. Todos os direitos reservados.
      </p>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="font-rajdhani text-sm font-bold uppercase tracking-[.2em] text-white/[.78]">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a href="#home" className="font-rajdhani text-sm font-semibold text-white/[.52] transition hover:text-racing-blue">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
