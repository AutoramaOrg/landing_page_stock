import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ChevronsRight, ShieldCheck, WalletCards } from 'lucide-react';
import FuturisticMeeting from './visuals/FuturisticMeeting.jsx';

const stats = [
  { icon: WalletCards, label: 'Cada ação', value: 'R$ 3,25' },
  { icon: BarChart3, label: 'Pacote mínimo', value: '25 ações' },
  { icon: ShieldCheck, label: 'Ações', value: 'Limitadas' },
];

export default function Hero() {
  return (
    <section id="hero" className="section-shell hero-grid min-h-screen pt-44 lg:pt-28">
      <div className="speed-lines" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(0,168,255,.22),transparent_34%),radial-gradient(circle_at_16%_35%,rgba(255,30,30,.18),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,.96)_0%,rgba(5,7,13,.68)_38%,rgba(5,7,13,.2)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-2xl"
      >
        <p className="mb-4 font-rajdhani text-xl font-bold uppercase italic tracking-[.16em] text-racing-red drop-shadow-[0_0_16px_rgba(255,30,30,.65)]">
          Oferta inicial limitada
        </p>
        <h1 className="font-bebas text-5xl uppercase leading-[.88] tracking-[.035em] text-white sm:text-6xl md:text-8xl xl:text-[8.5rem]">
          Compre ações
          <span className="block text-racing-red drop-shadow-[0_0_22px_rgba(255,30,30,.75)]">
            do Autorama Racing
          </span>
        </h1>
        <p className="mt-6 max-w-xl font-rajdhani text-lg font-medium leading-relaxed text-white/[.78] md:text-xl">
          Ganhe dividendos mensais, tenha possibilidade de revenda e ainda garanta acesso antecipado ao jogo.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {stats.map(({ icon: Icon, label, value }) => (
            <motion.div
              key={label}
              whileHover={{ y: -6, rotateX: 5 }}
              className="tech-card flex min-h-24 items-center gap-4 p-4"
            >
              <Icon className="text-racing-blue drop-shadow-[0_0_10px_rgba(0,168,255,.9)]" size={32} />
              <div>
                <p className="font-rajdhani text-xs font-bold uppercase tracking-[.16em] text-white/50">{label}</p>
                <p className="font-bebas text-2xl uppercase tracking-[.05em] text-white">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a href="#pacotes" className="red-button px-8 py-5 text-base">
            Quero comprar agora
            <ChevronsRight size={20} />
          </a>
          <a href="#pacotes" className="blue-button px-8 py-5 text-base">
            Ver pacotes
            <ChevronsRight size={20} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, x: 28 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
        className="relative z-10"
      >
        <FuturisticMeeting />
      </motion.div>
    </section>
  );
}
