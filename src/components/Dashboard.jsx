import React from 'react';
import { motion } from 'framer-motion';
import { MonitorUp, ShieldCheck, UsersRound } from 'lucide-react';
import InvestorOffice from './visuals/InvestorOffice.jsx';

const blocks = [
  { icon: MonitorUp, title: 'Painel do investidor', text: 'Acompanhe seus resultados em tempo real.' },
  { icon: ShieldCheck, title: 'Transparência', text: 'Informações claras e atualizações constantes.' },
  { icon: UsersRound, title: 'Participação no ecossistema', text: 'Sua participação impulsiona o futuro do jogo.' },
];

export default function Dashboard() {
  return (
    <section id="como-funciona" className="section-shell border-y border-racing-blue/20 py-20">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,168,255,.1),transparent_44%),radial-gradient(circle_at_20%_42%,rgba(0,168,255,.2),transparent_24%)]" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <InvestorOffice />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="title-mark font-bebas text-5xl uppercase tracking-[.06em] text-white md:text-6xl">
            Acompanhe sua participação
          </h2>
          <p className="mt-5 max-w-2xl font-rajdhani text-xl font-medium leading-relaxed text-white/70">
            Consulte seus dados, acompanhe sua participação e faça parte do crescimento do ecossistema.
          </p>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {blocks.map(({ icon: Icon, title, text }) => (
              <div key={title} className="mini-block">
                <Icon className="text-racing-blue" size={34} />
                <h3 className="mt-4 font-bebas text-2xl uppercase tracking-[.05em] text-white">{title}</h3>
                <p className="mt-2 font-rajdhani text-sm font-semibold leading-relaxed text-white/[.58]">{text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
