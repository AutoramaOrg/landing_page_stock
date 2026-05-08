import { motion } from 'framer-motion';
import { Check, ChevronsRight } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';
import ContractVisual from './visuals/ContractVisual.jsx';

const packages = [
  {
    name: 'Bronze',
    amount: '25 ações',
    price: 'R$ 81,25',
    tone: 'bronze',
    benefits: ['Dividendos mensais', 'Possibilidade de revenda', 'Acesso antecipado ao jogo'],
  },
  {
    name: 'Prata',
    amount: '50 ações',
    price: 'R$ 162,50',
    tone: 'silver',
    benefits: ['Dividendos mensais', 'Possibilidade de revenda', 'Acesso antecipado ao jogo', 'Maior participação nos lucros'],
  },
  {
    name: 'Ouro',
    amount: '100 ações',
    price: 'R$ 325,00',
    tone: 'gold',
    featured: true,
    benefits: ['Dividendos mensais', 'Possibilidade de revenda', 'Acesso antecipado ao jogo', 'Maior participação nos lucros'],
  },
];

export default function Packages() {
  return (
    <section id="pacotes" className="section-shell py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(255,180,0,.13),transparent_28%),radial-gradient(circle_at_18%_60%,rgba(0,168,255,.16),transparent_32%)]" />
      <SectionTitle title="Escolha seu lote de ações" />

      <div className="relative z-10 mx-auto mt-12 grid max-w-7xl items-center gap-6 px-5 lg:grid-cols-3">
        {packages.map((pack, index) => (
          <motion.article
            key={pack.name}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            whileHover={{ y: -10, rotateX: 4 }}
            className={`plan-card plan-${pack.tone} ${pack.featured ? 'lg:scale-[1.05]' : ''}`}
          >
            {pack.featured && <span className="best-badge">Mais vantajoso</span>}
            <div className="flex items-center justify-center gap-2">
              <span className="crown-mark">◆</span>
              <h3 className="font-orbitron text-4xl font-black uppercase tracking-[.08em]">{pack.name}</h3>
            </div>
            <ContractVisual tone={pack.tone} />
            <div className="mt-6 flex items-end justify-between border-b border-white/[.12] pb-4">
              <p className="font-bebas text-5xl uppercase tracking-[.04em]">{pack.amount}</p>
              <div className="text-right">
                <p className="font-rajdhani text-xs font-bold uppercase tracking-[.16em] text-white/[.45]">Valor total</p>
                <p className="font-bebas text-3xl tracking-[.04em]">{pack.price}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {pack.benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 border-b border-white/[.08] pb-2 font-rajdhani text-base font-semibold text-white/80">
                  <Check size={18} />
                  {benefit}
                </li>
              ))}
            </ul>
            <a href="#cta" className={`mt-8 w-full justify-center ${pack.tone === 'gold' ? 'gold-button' : pack.tone === 'silver' ? 'silver-button' : 'bronze-button'}`}>
              Escolher {pack.name}
              <ChevronsRight size={18} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
