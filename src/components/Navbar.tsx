import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  // { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-brand-dark/70 backdrop-blur-md border-b border-white/5 shadow-lg shadow-brand-violet/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        {/* Logo Mark */}
        <a href="#home" className="group relative z-10 flex items-center gap-2 hover-target">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center text-white font-space font-bold text-lg shadow-[0_0_15px_rgba(124,58,237,0.5)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-shadow duration-300">
            VM
          </div>
          <span className="font-space font-bold text-xl tracking-tight hidden sm:block">
            Vansh<span className="text-brand-cyan">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 hover-target"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#contact"
            className="relative px-5 py-2 text-sm font-semibold rounded-full overflow-hidden group hover-target"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-violet to-brand-cyan opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute top-0 left-0 w-full h-full bg-brand-dark rounded-full border border-white/10 group-hover:bg-transparent transition-colors duration-300 m-[1px] calc-w-[calc(100%-2px)] calc-h-[calc(100%-2px)]"></span>
            <span className="relative z-10 text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Hire Me
            </span>
            <div className="absolute inset-0 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.4)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-shadow duration-300 -z-10"></div>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden relative z-10 p-2 text-white/80 hover:text-white hover-target"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 shadow-2xl"
          >
            <ul className="flex flex-col items-center gap-6 w-full px-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="w-full text-center"
                >
                  <a
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-lg font-medium text-white/80 hover:text-white py-2"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-brand-violet to-brand-cyan text-white font-bold shadow-[0_0_20px_rgba(124,58,237,0.4)] inline-block"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
