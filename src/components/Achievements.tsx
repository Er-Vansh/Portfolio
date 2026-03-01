import { motion } from 'framer-motion';
import { Award, Trophy, Medal } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: "AI/ML Specialization",
    issuer: "LaunchEd Global",
    type: "Certification",
    icon: <Award className="text-brand-violet" size={24} />
  },
  {
    id: 2,
    title: "Runner up - AI Project Expo 2025",
    issuer: "LaunchEd Global",
    type: "Ranking",
    icon: <Medal className="text-[#C0C0C0]" size={24} />
  },
  {
    id: 3,
    title: "1st Place - Coding & Debugging Challenge",
    issuer: "University Techfest 2024 & 2025",
    type: "Award",
    icon: <Trophy className="text-[#FFD700]" size={24} />
  },
  {
    id: 4,
    title: "Tata - GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    type: "Certification",
    icon: <Award className="text-brand-cyan" size={24} />
  }
];

export default function Achievements() {
  return (
    <section className="relative w-full py-20 border-b border-white/5 bg-brand-dark/80 overflow-hidden">
      
      {/* Scroll Marquee Effect Context */}
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="font-mono text-sm tracking-[0.2em] text-white/40 uppercase relative inline-block">
            <span className="absolute top-1/2 left-[-40px] w-6 h-[1px] bg-white/20"></span>
            Recognitions & Certifications
            <span className="absolute top-1/2 right-[-40px] w-6 h-[1px] bg-white/20"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center flex-shrink-0 border border-white/5 shadow-inner">
                {item.icon}
              </div>
              <div>
                <h4 className="font-space font-semibold text-white/90 text-sm">{item.title}</h4>
                <p className="text-xs text-white/40 font-mono mt-1">{item.issuer} • {item.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
