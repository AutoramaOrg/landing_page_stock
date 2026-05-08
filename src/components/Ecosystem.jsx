import { motion } from 'framer-motion';
import { CalendarDays, TrendingUp, Users } from 'lucide-react';
import RacersVisual from './visuals/RacersVisual.jsx';

const items = [
  { icon: Users, title: 'Comunidade', text: 'Um time apaixonado em constante evolução.' },
  { icon: CalendarDays, title: 'Eventos', text: 'Competições, torneios e ativações exclusivas.' },
  { icon: TrendingUp, title: 'Crescimento', text: 'Novos conteúdos, parcerias e expansão.' },
];

export default function Ecosystem() {
  return (
    <section id="o-jogo" className="section-shell overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_60%,rgba(255,30,30,.2),transparent_36%),radial-gradient(circle_at_64%_30%,rgba(0,168,255,.14),transparent_28%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-racing-red to-transparent shadow-redGlow" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <RacersVisual />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-rajdhani text-lg font-bold uppercase tracking-[.18em] text-white/70">Você investe em</p>
          <h2 className="font-bebas text-6xl uppercase leading-[.88] tracking-[.05em] text-white md:text-7xl">
            Um ecossistema
            <span className="block text-racing-red drop-shadow-[0_0_18px_rgba(255,30,30,.8)]">vivo.</span>
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {items.map(({ icon: Icon, title, text }) => (
              <article key={title} className="border-l border-racing-blue/30 pl-5">
                <Icon className="text-racing-blue" size={36} />
                <h3 className="mt-4 font-bebas text-2xl uppercase tracking-[.05em] text-white">{title}</h3>
                <p className="mt-2 font-rajdhani text-sm font-semibold leading-relaxed text-white/[.62]">{text}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
