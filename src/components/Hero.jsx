import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, ChevronsRight, ShieldCheck, WalletCards } from 'lucide-react';

const stats = [
  { icon: WalletCards, label: 'Cada ação', value: 'R$ 3,25' },
  { icon: BarChart3, label: 'Pacote mínimo', value: '25 ações' },
  { icon: ShieldCheck, label: 'Ações', value: 'Limitadas' },
];

export default function Hero() {
  return (
    <section id="home" className="section-shell hero-grid min-h-screen pt-44 lg:pt-28">
      <div className="speed-lines" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_22%,rgba(0,168,255,.22),transparent_34%),radial-gradient(circle_at_16%_35%,rgba(255,30,30,.18),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,13,.96)_0%,rgba(5,7,13,.68)_38%,rgba(5,7,13,.2)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
      >
        <p className="mb-4 font-rajdhani text-xl font-bold uppercase italic tracking-[.16em] text-racing-red drop-shadow-[0_0_16px_rgba(255,30,30,.65)]">
          Oferta inicial limitada
        </p>
        <h1 className="font-bebas text-[2.65rem] uppercase leading-[.92] tracking-[.035em] text-white min-[380px]:text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
          <span className="block whitespace-nowrap">COMPRE AÇÕES</span>
          <span className="block whitespace-nowrap text-racing-red drop-shadow-[0_0_22px_rgba(255,30,30,.75)]">
            DO AUTORAMA RACING
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-rajdhani text-lg font-medium leading-relaxed text-white/[.78] md:text-xl lg:mx-0">
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

        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
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
        className="relative z-10 flex w-full items-center justify-center"
      >
        <div className="hero-image-frame">
          <img
            src="/assets/acoes.png"
            alt="Reunião futurista de investidores com gráficos de rendimento de ações"
            className="h-full w-full object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}
