import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1200; // 1.2s load time
    const intervalTime = 12;
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(nextProgress);

      if (currentStep >= totalSteps) {
        clearInterval(timer);
        setTimeout(onComplete, 200);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: '-100vh',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
      }}
      className="fixed inset-0 bg-brand-black z-[99999] flex flex-col items-center justify-center select-none"
    >
      <div className="text-center">
        {/* Logo outline trigger */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="font-heading font-extrabold text-3xl tracking-tight text-white mb-6"
        >
          <span className="text-accent-blue">AB</span>.dev
        </motion.div>
        
        {/* Counting indicator */}
        <div className="overflow-hidden h-[54px] flex items-center justify-center">
          <span className="font-heading font-bold text-5xl sm:text-6xl text-white/95 tabular-nums">
            {progress}%
          </span>
        </div>

        {/* Custom micro loading line */}
        <div className="w-[140px] h-[1.5px] bg-white/8 mt-6 relative overflow-hidden rounded-full mx-auto">
          <motion.div 
            className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-accent-blue to-accent-purple"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
