import { motion } from 'framer-motion';
import { Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24 md:py-32 flex justify-center border-b border-white/5 bg-brand-dark overflow-hidden">
      
      {/* Background Animated Wave/Glow */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-brand-violet/5 blur-[100px] -z-10 rounded-[100%] scale-150 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col justify-center"
          >
            <div className="inline-block mb-6">
              <span className="font-mono text-brand-cyan tracking-widest text-sm bg-brand-cyan/10 px-4 py-2 rounded-full border border-brand-cyan/20">CONVERGE</span>
            </div>
            
            <h2 className="font-space text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-violet to-brand-cyan">Future.</span>
            </h2>
            
            <p className="text-white/60 text-lg mb-12 max-w-md">
              Whether you're looking to integrate AI into your product, need consulting on ML architecture, or just want to discuss the latest paper—my inbox is always open.
            </p>
            
            <div className="flex flex-col gap-6">
              <a href="mailto:vanshmaurya00005@gmail.com" className="font-space text-2xl text-white hover:text-brand-cyan transition-colors w-max hover-target">
                vanshmaurya00005@gmail.com
              </a>
              
              <div className="flex gap-4">
                <a href="https://github.com/Er-Vansh" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-violet hover:text-white hover:border-brand-violet transition-all duration-300 hover-target cursor-pointer">
                   <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/vansh-maurya-7742b8315" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-brand-cyan hover:text-white hover:border-brand-cyan transition-all duration-300 hover-target cursor-pointer">
                   <Linkedin size={20} />
                </a>
                <a href="https://twitter.com/vansh_maurya_05" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white hover:border-white/40 transition-all duration-300 hover-target cursor-pointer">
                   <Twitter size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Inner Glow */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-cyan/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors placeholder:text-white/20"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors placeholder:text-white/20"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-sm font-mono text-white/50 uppercase tracking-wider">Message</label>
                <textarea 
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-violet transition-colors resize-none placeholder:text-white/20"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting || submitted}
                className={`group relative w-full py-4 rounded-xl overflow-hidden font-bold transition-all duration-300 flex items-center justify-center gap-2 hover-target mt-2 ${
                  submitted ? 'bg-green-500/20 border-green-500/50 text-green-400' : 'bg-white text-brand-dark hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]'
                }`}
              >
                {!isSubmitting && !submitted && (
                  <>
                    <span>Transmit Message</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
                {isSubmitting && (
                  <span className="animate-pulse">Transmitting...</span>
                )}
                {submitted && (
                  <span>Message Received!</span>
                )}
                
                {/* Ripple Effect base */}
                <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gradient-to-r from-brand-violet to-brand-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* To ensure text is visible when hovered, the button text color needs to flip to white, or we use a clever mix. Let's just keep the button white and the text dark, but hover shadow makes it glow. */}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
