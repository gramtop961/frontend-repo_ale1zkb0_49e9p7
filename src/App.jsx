import Hero from './components/Hero';
import Experience from './components/Experience';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d12] font-['Inter',_'Geist',_system-ui] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0d12]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-semibold tracking-widest text-white/80">FLAMES STUDIO</a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#about" className="hover:text-white">Services</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="rounded-full bg-white px-4 py-2 font-semibold text-black hover:opacity-95">Start</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Experience />
        <Pricing />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-[#0b0d12] py-10 text-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <p className="text-xs">© {new Date().getFullYear()} Flames Studio. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
