import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: "AI/ML Trainee & Intern",
    company: "LaunchEd Global",
    duration: "Jul 2025 - Aug 2025",
    description: [
      "Built NotMyFault.AI, an AI-powered chatbot for generating realistic, context-aware excuses and proof documents.",
      "Utilized Google Gemini AI API with HTML, CSS, and JavaScript to create a fully functional web application.",
      "Enhanced AI prompt design and response quality through iterative testing and optimization."
    ]
  },
  // {
  //   id: 2,
  //   role: "Machine Learning Engineer",
  //   company: "DataDynamics Inc.",
  //   duration: "Jul 2021 - Dec 2023",
  //   description: [
  //     "Developed predictive maintenance models using time-series forecasting, saving $2M annually in downtime costs.",
  //     "Built a scalable data ingestion framework handling 5TB of streaming data daily using Apache Kafka and Spark.",
  //     "Published two papers internally on novel approaches to anomaly detection in manufacturing pipelines."
  //   ]
  // },
  // {
  //   id: 3,
  //   role: "AI Research Intern",
  //   company: "Global Tech Labs",
  //   duration: "May 2020 - Aug 2020",
  //   description: [
  //     "Researched few-shot learning techniques for image classification with limited datasets.",
  //     "Contributed to an open-source CV framework, improving benchmark accuracy by 2.5%."
  //   ]
  // }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden border-b border-white/5 bg-brand-dark">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16 flex flex-col items-center text-center gap-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-16 h-16 rounded-full bg-brand-violet/10 flex items-center justify-center mb-4 border border-brand-violet/30"
          >
            <Briefcase size={28} className="text-brand-violet" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-space text-3xl md:text-5xl font-bold text-white relative"
          >
            Professional Trajectory
          </motion.h2>
        </div>

        <div className="relative">
          {/* Central Line */}
          <motion.div 
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-brand-violet via-brand-cyan to-transparent md:-translate-x-1/2 transform-origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          ></motion.div>

          {/* Timeline Items */}
          <div className="flex flex-col gap-12 md:gap-24 relative z-10 pt-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Node Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-brand-cyan border-4 border-brand-dark -translate-x-[7px] md:-translate-x-1/2 mt-6"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="absolute inset-0 rounded-full bg-brand-cyan animate-ping opacity-50"></div>
                </motion.div>

                {/* Content Card */}
                <motion.div 
                  className={`pl-12 md:pl-0 md:w-1/2 flex flex-col justify-center ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                >
                  <div className={`p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-brand-violet/50 transition-colors duration-300 relative group overflow-hidden text-left`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-violet/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <span className="text-brand-cyan font-mono text-sm mb-2 block">{exp.duration}</span>
                    <h3 className="font-space text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-brand-violet/80 font-medium mb-4">{exp.company}</h4>
                    
                    <ul className={`space-y-2 text-white/60 text-sm md:text-base ${index % 2 === 0 ? 'md:pl-0' : ''}`}>
                      {exp.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-brand-violet mt-1.5 opacity-50">▸</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
                
                {/* Empty Half Space for layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
