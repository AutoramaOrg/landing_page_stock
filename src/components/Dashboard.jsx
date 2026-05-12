import React from 'react';
import { motion } from 'framer-motion';
import { Activity, BarChart3, Trophy, WalletCards } from 'lucide-react';

const stats = [
  { icon: WalletCards, value: 'R$ 3,25', label: 'por ação' },
  { icon: BarChart3, value: '+42%', label: 'projeção de evolução' },
  { icon: Activity, value: '24/7', label: 'acompanhamento' },
  { icon: Trophy, value: '100%', label: 'ecossistema racing' },
];

export default function Dashboard() {
  return (
    <section id="como-funciona" className="section-shell participation-section border-y border-racing-blue/20 py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_45%,rgba(0,168,255,.22),transparent_30%),radial-gradient(circle_at_82%_42%,rgba(255,30,30,.17),transparent_28%),linear-gradient(90deg,rgba(255,180,0,.08),transparent_28%,rgba(0,168,255,.08))]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-racing-blue to-transparent shadow-blueGlow" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1.04fr_.96fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="flex min-h-[320px] items-center justify-center lg:min-h-[520px]"
        >
          <div className="participation-image-frame">
            <img
              src="/assets/wallpaper-statistics.png"
              alt="Investidores acompanhando estatísticas e desempenho financeiro"
              className="h-full w-full object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 34 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          className="mx-auto max-w-2xl text-center lg:mx-0"
        >
          <p className="font-rajdhani text-sm font-bold uppercase tracking-[.26em] text-racing-gold drop-shadow-[0_0_14px_rgba(255,180,0,.46)]">
            Painel do investidor
          </p>
          <h2 className="mt-4 whitespace-nowrap font-bebas text-[2rem] uppercase leading-none tracking-[.04em] text-white drop-shadow-[0_0_20px_rgba(255,30,30,.22)] min-[420px]:text-[2.45rem] md:text-5xl xl:text-6xl">
            Acompanhe sua participação
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-rajdhani text-lg font-semibold leading-relaxed text-white/[.72] md:text-xl">
            Monitore o desempenho das ações, acompanhe a evolução dos seus investimentos e veja seu crescimento dentro do Autorama Racing.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {stats.map(({ icon: Icon, value, label }, index) => (
              <motion.article
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="stat-card"
              >
                <Icon className="text-racing-blue drop-shadow-[0_0_12px_rgba(0,168,255,.82)]" size={32} />
                <div>
                  <strong className="block font-orbitron text-2xl font-black uppercase tracking-[.05em] text-white md:text-3xl">
                    {value}
                  </strong>
                  <span className="font-rajdhani text-sm font-bold uppercase tracking-[.14em] text-white/[.56]">
                    {label}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
