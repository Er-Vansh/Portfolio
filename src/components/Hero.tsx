import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from 'lucide-react';
import HeroParticleBackground from './HeroParticleBackground';

// resume asset
import resume from '../../public/Vansh_Maurya_Resume.pdf';

const roles = [
  "AI/ML Enthusiast",
  "Deep Learning Enthusiast",
  "Web Developer",
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HeroParticleBackground />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark z-[1] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Intro Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-4 py-2 rounded-full border border-brand-cyan/30 bg-brand-cyan/10 backdrop-blur-md mb-8 inline-block"
        >
          <span className="text-brand-cyan font-mono text-sm tracking-widest pl-1">INITIATING SEQUENCE...</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          className="font-space font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan relative">
            Vansh Maurya
            <motion.span 
              className="absolute -inset-1 bg-gradient-to-r from-brand-violet to-brand-cyan blur-xl opacity-30 -z-10"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            ></motion.span>
          </span>
        </motion.h1>

        {/* Animated Subtitle */}
        <div className="h-12 md:h-16 mb-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentRoleIndex}
              initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              exit={{ y: -20, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="font-space text-2xl md:text-3xl text-white/80 font-medium"
            >
              {roles[currentRoleIndex]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Brief Bio */}
        <motion.p
          className="max-w-2xl text-white/50 text-base md:text-lg mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I design and deploy state-of-the-art neural networks to solve complex, real-world problems. Welcome to my digital cortex.
        </motion.p>

        {/* Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 rounded-full bg-white text-brand-dark font-bold hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center gap-2 hover-target"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-full border border-white/20 text-white font-bold hover:bg-white/5 hover:border-brand-violet/50 transition-all duration-300 flex items-center gap-2 hover-target"
          >
            <Download size={18} className="text-brand-violet group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a href="https://github.com/Er-Vansh" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white hover:scale-110 transition-all duration-300 hover-target">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/vansh-maurya-7742b8315" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300 hover-target">
            <Linkedin size={24} />
          </a>
          <a href="https://twitter.com/Vansh_Maurya_05" target="_blank" rel="noreferrer" className="text-white/60 hover:text-[#1DA1F2] hover:scale-110 transition-all duration-300 hover-target">
            <Twitter size={24} />
          </a>
          <a href="mailto:vanshmaurya00005@gmail.com" className="text-white/60 hover:text-brand-cyan hover:scale-110 transition-all duration-300 hover-target">
            <Mail size={24} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
