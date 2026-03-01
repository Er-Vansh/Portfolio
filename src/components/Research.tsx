import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, FileText } from 'lucide-react';

const researchItems = [
  {
    id: 1,
    title: "Adaptive Rate Control in Variational Autoencoders for Sparse Datasets",
    type: "Publication",
    date: "November 2023",
    description: "Proposed a novel dynamic KL-divergence weighting scheme that prevents posterior collapse when training VAEs on highly sparse medical datasets.",
    tags: ["Generative Models", "Healthcare", "NeurIPS Workshop"],
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Rethinking Attention Mechanisms for Time-Series Analysis",
    type: "Blog Post",
    date: "August 2023",
    description: "An in-depth exploration of why standard multi-head attention fails on high-frequency financial data and how causal temporal masking offers a robust alternative.",
    tags: ["Transformers", "Time-Series", "Quantitative Finance"],
    link: "https://example.com"
  },
  {
    id: 3,
    title: "Optimizing LLM Inference on Edge Devices via Extreme Quantization",
    type: "Publication",
    date: "March 2023",
    description: "Demonstrated a 4-bit weight quantization methodology maintaining 98% of 16-bit performance across standard NLP benchmarks on Raspberry Pi 4.",
    tags: ["LLMs", "Edge AI", "Quantization"],
    link: "https://example.com"
  }
];

export default function Research() {
  return (
    <section id="research" className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-brand-dark">
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 md:mb-20 flex flex-col items-start gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-brand-cyan"></span>
            <h2 className="font-space text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
              03. Research_&_Publications
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {researchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-violet/50 transition-all duration-300 relative group flex flex-col h-full hover:bg-white/10"
            >
              {/* Type Badge */}
              <div className="flex items-center gap-2 mb-6">
                {item.type === 'Publication' ? (
                  <FileText size={16} className="text-brand-violet" />
                ) : (
                  <BookOpen size={16} className="text-brand-cyan" />
                )}
                <span className="text-xs font-mono tracking-widest uppercase text-white/50">{item.type}</span>
                <span className="text-xs font-mono text-white/30 ml-auto">{item.date}</span>
              </div>
              
              <h3 className="font-space text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">
                {item.title}
              </h3>
              
              <p className="text-white/60 text-sm mb-8 flex-grow">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-brand-violet/80 px-2 py-1 rounded bg-brand-violet/10 border border-brand-violet/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href={item.link} target="_blank" rel="noreferrer" className="mt-auto group/btn flex items-center gap-2 text-white/70 hover:text-white transition-colors w-max hover-target">
                <span className="text-sm font-semibold border-b border-transparent group-hover/btn:border-white/70 pb-0.5">Read Full Text</span>
                <ExternalLink size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
