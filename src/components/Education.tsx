import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "B. Tech. in Computer Science & Engineering (AI & ML Specialization)",
    institution: "Abdul Kalam Technical University",
    year: "2023 - 2027",
    details: "Graduated with Honors. Core coursework in Data Structures, Algorithms, Linear Algebra, and Statistical Modeling, along with specialized classes in Machine Learning, Deep Learning, and AI Ethics."
  },
  {
    id: 2,
    degree: "Intermediate in Science (PCM)",
    institution: "CBSE Board",
    year: "2022 - 2023",
    details: "Graduated with Distinction. Focused on Physics, Chemistry, and Mathematics, laying a strong foundation for analytical thinking and problem-solving skills essential for AI/ML."
  }
];

export default function Education() {
  return (
    <section id="education" className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-brand-dark/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mb-4 border border-brand-cyan/30"
          >
            <GraduationCap size={28} className="text-brand-cyan" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-space text-3xl md:text-5xl font-bold text-white relative"
          >
            Academic Foundation
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-brand-cyan/50 hover:bg-white/10 transition-all duration-300 relative group"
            >
              <div className="absolute top-0 right-8 w-[1px] h-8 bg-brand-cyan opacity-50"></div>
              
              <span className="text-brand-violet font-mono text-sm mb-4 block py-1 px-3 bg-brand-violet/10 rounded-full inline-block border border-brand-violet/20">{edu.year}</span>
              <h3 className="font-space text-2xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-white/80 font-medium mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-cyan"></span>
                {edu.institution}
              </h4>
              <p className="text-white/60 leading-relaxed text-sm">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
