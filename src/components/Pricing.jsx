import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const tiers = [
  {
    name: 'Launch',
    price: '$1,200',
    tagline: 'Premium single-page presence for early-stage brands',
    features: [
      'One-page modern site',
      'Responsive + accessible',
      'Basic animations',
      'SEO setup & analytics',
      '1 round of revisions',
      '2 week delivery',
    ],
    highlight: false,
  },
  {
    name: 'Growth',
    price: '$3,200',
    tagline: 'Multi-page site with CMS and microinteractions',
    features: [
      'Up to 8 pages',
      'Headless CMS integration',
      'Advanced motion design',
      'Performance optimization',
      '2 rounds of revisions',
      '4–6 week delivery',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    tagline: 'Complex systems, integrations, and bespoke art direction',
    features: [
      'Unlimited pages',
      'Design system & components',
      'Custom 3D/interactive',
      'Integrations & automations',
      'Priority support',
      'Scoped timeline',
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative w-full bg-[#0b0d12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Pricing</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">Web Development</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Transparent, value-focused pricing for premium builds. Social media design and operator services are quoted based on scope.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
              className={`relative rounded-3xl border ${
                tier.highlight ? 'border-emerald-400/40' : 'border-white/10'
              } bg-white/5 p-6 pt-8 backdrop-blur-xl`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold text-black shadow">
                  <Zap className="h-3 w-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <div className="mt-1 text-4xl font-extrabold">{tier.price}</div>
              <p className="mt-2 text-sm text-white/70">{tier.tagline}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/80">
                    <Check className="h-4 w-4 text-emerald-400" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  tier.highlight
                    ? 'bg-emerald-400 text-black hover:opacity-95'
                    : 'border border-white/15 bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                Start with {tier.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
