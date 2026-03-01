import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const skillCategories = [
  {
    title: "AI & Machine Learning",
    skills: ["Python", "Scikit-learn", "OpenCV", "Hugging Face", "Tensorflow"]
  },
  {
    title: "Data Engineering",
    skills: ["Pandas", "NumPy", "Matplotlib", "SQL",  "EDA", "Data Cleaning", "Jupyter"]
  },
  {
    title: "Web & Backend",
    skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Git", "Docker", "Github", "CI/CD"]
  },
  {
    title: "Tools & Ecosystem",
    skills: ["VS Code", "Colab", "Kaggle", "Postman", "Jupyter", "Supabase"]
  }
];

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
  };

  return (
    <section id="skills" className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center gap-4">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-violet/30 bg-brand-violet/10"
          >
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></span>
            <span className="text-brand-violet font-mono text-sm tracking-widest pl-1">COMPETENCIES</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="font-space text-4xl md:text-5xl lg:text-6xl font-bold text-white relative"
          >
            My Tech Arsenal
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-brand-violet to-brand-cyan rounded-full"></div>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-1 rounded-2xl group"
              // The gradient border wrapper
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%)`
              }}
            >
              {/* Inner content box */}
              <div className="h-full bg-brand-dark/90 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col gap-6 relative overflow-hidden group-hover:border-white/10 transition-all duration-300">
                {/* Glow behind the category box on hover */}
                <div className="absolute -inset-10 bg-gradient-to-br from-brand-violet/20 to-brand-cyan/20 opacity-0 group-hover:opacity-100 blur-[30px] transition-opacity duration-500 rounded-2xl -z-10 pointer-events-none"></div>

                <h3 className="font-space text-2xl font-semibold text-white group-hover:text-brand-cyan transition-colors duration-300">
                  {category.title}
                </h3>

                <motion.div 
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 border border-brand-violet/20 bg-brand-violet/5 hover:bg-brand-violet/20 hover:border-brand-violet/50 rounded-lg backdrop-blur-sm transition-colors duration-200 cursor-default"
                    >
                      <span className="font-mono text-sm text-white/80">{skill}</span>
                    </motion.div>
                  ))}
                </motion.div>
                
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
