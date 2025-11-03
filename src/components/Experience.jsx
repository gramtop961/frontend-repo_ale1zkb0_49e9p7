import { motion } from 'framer-motion';
import { Code2, Palette, Headset, Star } from 'lucide-react';

const services = [
  {
    title: 'Web Development',
    icon: Code2,
    description:
      'High-performance websites built with modern stacks, animation, and pixel-perfect responsiveness.',
    features: ['Next.js / React', 'CMS or headless', 'SEO + Analytics', 'Microinteractions'],
    href: '#pricing',
  },
  {
    title: 'Social Media Design',
    icon: Palette,
    description:
      'Branded visuals that pop — carousels, reels covers, and campaign kits crafted for engagement.',
    features: ['Template systems', 'Motion-ready assets', 'On-brand typography', 'Export-ready sets'],
    href: '#contact',
  },
  {
    title: 'Operator Services (UNS area)',
    icon: Headset,
    description:
      'Reliable operator support for the UNS area only — fast coordination, reporting, and on-ground execution.',
    features: ['Local deployment', 'Weekly reporting', 'SLA-backed responses', 'Secure workflows'],
    href: '#contact',
  },
];

const testimonials = [
  {
    name: 'Aria Tan',
    role: 'Founder, Northwave Labs',
    quote:
      'They delivered an immersive site that boosted our conversion by 32% — smooth animations and zero lag.',
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Lead, StrataIQ',
    quote:
      'Our social presence finally looks premium. Consistent typography, bold visuals, and great results.',
  },
  {
    name: 'Sinta R.',
    role: 'Ops Supervisor, UNS Region',
    quote:
      'Operator services are proactive and reliable. Clear communication and timely execution every time.',
  },
];

export default function Experience() {
  return (
    <section id="about" className="relative w-full bg-[#0b0d12] py-24 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">About</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">
            Elegant, fast, and crafted for impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            We partner with modern brands to build experiences that feel alive: typography-first layouts, glassy surfaces, and fluid motion — engineered for reliability and speed.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.a
              key={s.title}
              href={s.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/[0.08]"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 text-emerald-300">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{s.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{s.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <li key={f} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-sm font-medium text-emerald-300 opacity-0 transition group-hover:opacity-100">
                Learn more →
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-xl font-semibold md:text-2xl">What clients say</h3>
            <div className="hidden gap-1 md:flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="h-4 w-4 fill-emerald-400 text-emerald-400" />
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-0 rounded-3xl bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-indigo-400/10 blur-2xl" />
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: [0, -24, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
                >
                  <p className="text-white/80">“{t.quote}”</p>
                  <div className="mt-4 text-sm text-white/60">
                    {t.name} · {t.role}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
