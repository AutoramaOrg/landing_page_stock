import { Disc3, Instagram, Twitter, Youtube } from 'lucide-react';

const nav = ['O Jogo', 'Ações', 'Como Funciona', 'FAQ'];
const support = ['Central de Ajuda', 'Contato', 'Termos de Uso', 'Política de Privacidade'];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-racing-blue/20 bg-black/60 px-5 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-9 w-11 overflow-hidden border-l-4 border-racing-red bg-racing-blue/10">
              <span className="checkered absolute inset-0 opacity-90" />
            </span>
            <div className="font-orbitron text-lg font-black uppercase leading-none tracking-[.08em]">
              Autorama
              <span className="block text-right font-rajdhani text-xs tracking-[.32em]">Racing</span>
            </div>
          </div>
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
            <a href="#hero" className="font-rajdhani text-sm font-semibold text-white/[.52] transition hover:text-racing-blue">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
