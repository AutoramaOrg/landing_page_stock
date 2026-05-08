import { motion } from 'framer-motion';
import { Clock3, Gamepad2, RefreshCcw, Wallet } from 'lucide-react';
import SectionTitle from './SectionTitle.jsx';

const benefits = [
  { icon: Wallet, title: 'Dividendos mensais', text: 'Receba dividendos todos os meses.' },
  { icon: RefreshCcw, title: 'Possibilidade de revenda', text: 'Negocie suas ações quando quiser.' },
  { icon: Clock3, title: 'Ações limitadas', text: 'Oferta inicial com quantidade restrita.' },
  { icon: Gamepad2, title: 'Acesso antecipado', text: 'Entre no jogo antes de todo mundo.' },
];

export default function Benefits() {
  return (
    <section id="acoes" className="section-shell border-y border-racing-blue/20 bg-racing-black py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-racing-blue to-transparent shadow-blueGlow" />
      <SectionTitle title="Por que comprar ações?" />
      <div className="relative z-10 mx-auto mt-12 grid max-w-7xl gap-5 px-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            whileHover={{ y: -8, rotateX: 6, rotateY: -3 }}
            className="tech-card group min-h-48 p-7"
          >
            <Icon className="mb-5 text-racing-blue transition group-hover:scale-110" size={46} />
            <h3 className="font-bebas text-3xl uppercase leading-none tracking-[.055em] text-white">{title}</h3>
            <p className="mt-3 font-rajdhani text-base font-semibold leading-relaxed text-white/[.62]">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
