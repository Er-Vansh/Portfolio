import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import SukoonAIImage from '../assets/SukoonAI.png';
import NotMyFaultImage from '../assets/NotMyFault.png';

const categories = ['All', 'ML', 'Web'];

const projectsData = [
  {
    id: 1,
    title: 'SukoonAI',
    description: 'SukoonAI is an AI-powered mental health support platform developed as a team project, aimed at providing accessible and empathetic emotional assistance. The platform offers real-time AI-driven conversations, personalized wellness suggestions, and a secure, user-friendly experience to support mental well-being anytime, anywhere.',
    image: SukoonAIImage,
    tech: ['Google Medgemma','Grok API', 'NextJS', 'TailwindCSS'],
    category: 'ML',
    github: 'https://github.com/Er-Vansh/SukoonAI',
    demo: 'https://sukoon-ai-kttc.vercel.app/',
    featured: true,
  },
  {
    id: 2,
    title: 'Safra',
    description: 'A secure and user-friendly file upload and sharing platform that allows users to easily upload, manage, and share files with others. Features include drag-and-drop uploads, file previews and password protection. Built with scalability and security in mind.',
    image: 'https://help.therookies.co/content/images/2024/11/details-2.png',
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Firebase"],
    category: 'Web',
    github: 'https://github.com/Er-Vansh/Safra',
    demo: 'https://safra.vercel.app/',
    featured: false,
  },
  {
    id: 3,
    title: 'Predictive Market Analyzer',
    description: 'A deep reinforcement learning agent designed to identify subtle market patterns and predict short-term price movements across multiple asset classes.',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop',
    tech: ['TensorFlow', 'Pandas', 'RLlib'],
    category: 'ML',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'NotMyFault.AI',
    description: 'An innovative web application that leverages advanced AI models to generate humorous and context-aware excuses for various situations. Features include a chat interface, customizable excuse categories, and social sharing options. Built with a focus on user experience and responsive design.',
    image: NotMyFaultImage,
    tech: ['Python', 'HTML', 'VanillaJS', 'Google API'],
    category: 'Web',
    github: 'https://github.com/Er-Vansh/NotMyFault.AI',
    demo: 'https://notmyfaultai.vercel.app/',
    featured: true, // Takes more space in bento grid
  },
  {
    id: 5,
    title: 'Image Classification with CNNs',
    description: 'A convolutional neural network (CNN) built from scratch using TensorFlow to classify images from the CIFAR-10 & Horse2Zebra dataset, achieving over 80% accuracy.',
    image: 'https://deeplobe.ai/wp-content/uploads/2021/06/SENTIMENT-ANALYSIS-1.jpg',
    tech: ['TensorFlow', 'Python', 'CNNs'],
    category: 'ML',
    github: 'https://github.com',
    demo: 'https://example.com',
    featured: false,
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter((project) => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section id="projects" className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-brand-dark/50">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-cyan/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12 md:mb-20 flex flex-col items-start gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-brand-violet"></span>
            <h2 className="font-space text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
              02. Neural_Architectures
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mt-4"
          >
            A selection of my most impactful projects blending sophisticated AI models with robust software engineering.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <motion.div 
          className="flex flex-wrap items-center gap-2 md:gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full font-mono text-sm transition-all duration-300 border hover-target ${
                activeFilter === cat 
                  ? 'bg-brand-violet/20 border-brand-violet/50 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]' 
                  : 'bg-white/5 border-white/10 text-white/60 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className={`group relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm ${
                  project.featured && activeFilter === 'All' ? 'md:col-span-2' : ''
                }`}
                // 3D Tilt simulation via framer motion could be complex without external lib, using simple hover effect instead
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Glow Border on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-violet to-brand-cyan opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl z-0 pointer-events-none"></div>
                
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-brand-dark/80 group-hover:bg-brand-dark/60 transition-colors duration-500 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover filter grayscale opacity-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  
                  {/* Top tags/links */}
                  <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full bg-brand-cyan/20 border border-brand-cyan/30 text-brand-cyan text-xs font-mono backdrop-blur-md">
                      {project.category}
                    </span>
                    
                    <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[-10px] group-hover:translate-y-0">
                      <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand-violet hover:border-brand-violet transition-colors hover-target">
                        <Github size={18} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-brand-cyan hover:border-brand-cyan transition-colors hover-target">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-space text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm md:text-base mb-6 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.tech.map(t => (
                        <span key={t} className="text-xs font-mono text-white/50 px-2 py-1 rounded bg-white/5 border border-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        <div className="mt-16 flex justify-center">
          <a href="https://github.com/Er-Vansh" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors hover-target">
            <span className="font-mono text-sm border-b border-transparent group-hover:border-white/50 pb-0.5">VIEW FULL ARCHIVE ON GITHUB</span>
            <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
