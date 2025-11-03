import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0b0d12] py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Contact</p>
          <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">Let’s build something iconic</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Share your goals and we’ll propose a tailored plan with timelines and clear pricing.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="flex items-center gap-3 text-white/80">
              <Mail className="h-5 w-5 text-emerald-400" /> hello@yourstudio.com
            </div>
            <div className="mt-3 flex items-center gap-3 text-white/60">
              <Phone className="h-5 w-5 text-emerald-400" /> +62 812 3456 7890
            </div>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-white/60 hover:text-white"
            >
              <Instagram className="h-5 w-5" /> Instagram
            </a>
          </div>

          <form className="md:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="text-sm text-white/70">Name</label>
                <input
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-emerald-400/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-white/70">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-emerald-400/50"
                  placeholder="you@company.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="text-sm text-white/70">Project Details</label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-emerald-400/50"
                  placeholder="Tell us about timeline, goals, and scope."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black transition hover:opacity-95"
            >
              Send Request <Send className="h-4 w-4" />
            </button>
            <p className="mt-3 text-xs text-white/50">By submitting, you agree to our friendly terms.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
