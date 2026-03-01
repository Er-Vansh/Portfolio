import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative border-t border-white/5 bg-brand-dark/80 pt-16 pb-8 overflow-hidden">
      {/* Decorative gradient blur at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-brand-violet/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gradient-to-br from-brand-violet to-brand-cyan flex items-center justify-center text-white font-space font-bold text-lg">
                VM
              </div>
              <span className="font-space font-bold text-xl tracking-tight">
                Vansh<span className="text-brand-cyan">.</span>
              </span>
            </div>
            <p className="text-white/50 text-sm max-w-xs mt-2">
              Building intelligent systems and exploring the frontiers of Artificial Intelligence and Machine Learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 md:items-center">
            <h4 className="font-space font-semibold text-white">Quick Links</h4>
            <ul className="flex flex-col md:items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-cyan text-sm transition-colors duration-200 hover-target"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4 md:items-end">
            <h4 className="font-space font-semibold text-white">Connect</h4>
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/Er-Vansh" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-violet hover:text-white transition-all duration-300 hover-target">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/vansh-maurya-7742b8315" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-brand-cyan hover:text-white transition-all duration-300 hover-target">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/vansh_maurya_05" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover-target">
                <Twitter size={18} />
              </a>
              <a href="mailto:vanshmaurya00005@gmail.com" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-gradient-to-br hover:from-brand-violet hover:to-brand-cyan hover:text-white transition-all duration-300 hover-target">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>&copy; {currentYear} Vansh Maurya. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Designed & Built with</span>
            <span className="text-brand-violet mx-1">♥</span>
            <span>for the future.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
