import { motion } from 'framer-motion';
import { Database, Code2, Cpu } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <Code2 size={24} className="text-brand-violet" />, value: "10+", label: "Projects" },
    { icon: <Database size={24} className="text-brand-cyan" />, value: "10+", label: "Technologies" },
    { icon: <Cpu size={24} className="text-brand-violet" />, value: "100+", label: "Contributions" },
  ];

  return (
    <section id="about" className="relative w-full py-24 md:py-32 flex items-center justify-center overflow-hidden border-b border-white/5 bg-brand-dark">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/10 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col items-start gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-brand-cyan"></span>
            <h2 className="font-space text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
              01. Protocol_About
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Glowing Hexagonal Image Frame */}
          <motion.div 
            className="relative flex justify-center items-center h-[400px]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated rings */}
            <motion.div 
              className="absolute w-[350px] h-[350px] rounded-full border border-brand-violet/30 border-dashed"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            <motion.div 
              className="absolute w-[380px] h-[380px] rounded-full border border-brand-cyan/20 border-t-brand-cyan"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            ></motion.div>
            
            {/* Hexagon Clip Path */}
            <div className="relative w-64 h-72 md:w-80 md:h-96 z-10 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-violet to-brand-cyan p-1" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                <div className="w-full h-full bg-brand-dark flex items-center justify-center relative overflow-hidden" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                  {/* Overlay for generic template usage */}
                  <div className="absolute inset-0 bg-brand-violet/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                  {/* Photo Placeholder */}
                  {/* // TODO: Replace with real data photo */}
                  <img src="../../public/1000112215.jpg" alt="Vansh Maurya" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" />
                </div>
              </div>
            </div>
            
            {/* Glow effect behind */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-cyan/20 blur-[60px] rounded-full pointer-events-none -z-10"></div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-space text-2xl md:text-3xl font-semibold mb-4 text-white hover-target">
                Decoding Data, Building Intelligence
              </h3>
              <p className="text-white/70 leading-relaxed text-lg mb-6">
                Hello! I'm <span className="text-brand-cyan font-medium">Vansh Maurya</span>, an AI/ML Enthusiast with a relentlessly curious mind. My journey in technology is driven by the desire to transform raw data into intelligent, autonomous systems that can perceive, learn, and act.
              </p>
              <p className="text-white/70 leading-relaxed text-lg">
                Whether deploying robust Deep Learning models, optimizing Computer Vision pipelines, or crafting intuitive full-stack web wrappers for AI logic, I thrive at the intersection of complex algorithms and real-world impact. I don't just build models; I build solutions.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-violet/50 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-3 p-3 rounded-xl bg-black/30 inline-block group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all">
                    {stat.icon}
                  </div>
                  <div className="font-space font-bold text-3xl text-white mb-1 group-hover:text-brand-cyan transition-colors">{stat.value}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
