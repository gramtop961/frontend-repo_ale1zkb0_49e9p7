import { motion } from 'framer-motion';
import { Rocket, ArrowRight } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-[#0b0d12] via-[#0d1117] to-[#0b0d12] text-white">
      <div className="absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(88,101,242,0.18),_transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-24 left-[-10%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,185,129,0.16),_transparent_60%)] blur-3xl" />
      </div>

      <div className="absolute inset-0 pointer-events-auto">
        <Spline
          scene="https://prod.spline.design/1M1y3M7Rk4o3b3K2/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Rocket className="h-4 w-4 text-emerald-400" />
          <span className="text-xs uppercase tracking-[0.2em] text-white/70">Futuristic Digital Studio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="text-center font-[800] leading-tight text-white"
        >
          <span className="block text-4xl md:text-6xl lg:text-7xl">Designing Tomorrow</span>
          <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-indigo-300 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl">
            For Visionary Brands
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 max-w-2xl text-center text-base md:text-lg text-white/70"
        >
          We craft immersive web experiences, bold social content, and dependable operator services for the UNS area — engineered for speed, elegance, and impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:opacity-95"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
          >
            View Web Dev Pricing
          </a>
        </motion.div>

        <div className="pointer-events-none mt-16 grid w-full max-w-5xl grid-cols-2 gap-4 opacity-80 md:grid-cols-4">
          {[
            'Next‑Gen UI',
            'Motion Design',
            'Responsive',
            'Fast & SEO‑Ready',
          ].map((tag, i) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs font-medium text-white/70 backdrop-blur-md"
            >
              {tag}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0d12]" />
    </section>
  );
}
