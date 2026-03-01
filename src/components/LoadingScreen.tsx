import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit after 100%
          return 100;
        }
        return prev + 2; // Speed of progress
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[10000] bg-brand-dark flex flex-col items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Futuristic glowing rings */}
        <motion.div 
          className="absolute inset-0 rounded-full border-t-2 border-brand-cyan/50"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute inset-4 rounded-full border-b-2 border-brand-violet/50"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Core center */}
        <div className="relative z-10 font-space text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-violet">
          VM
        </div>
      </div>
      
      {/* Progress bar */}
      <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-brand-cyan to-brand-violet"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="mt-4 font-mono text-sm text-brand-cyan/70">
        INITIALIZING NEURAL NET... {progress}%
      </div>
    </motion.div>
  );
}
