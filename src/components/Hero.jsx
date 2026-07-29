import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/portfolioData';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section className="relative pt-40 pb-28 overflow-hidden min-h-[90vh] flex items-center justify-center">
      
      {/* Moving Aurora Background Glow Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -50, 30, 0],
            scale: [1, 1.15, 0.95, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] rounded-full bg-accent-purple/8 blur-[130px]"
        />
        <motion.div 
          animate={{
            x: [0, -80, 50, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.1, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] -right-[10%] w-[550px] h-[550px] rounded-full bg-accent-blue/6 blur-[140px]"
        />
      </div>

      <div className="container mx-auto px-6 max-w-[1100px] text-center relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[860px] mx-auto"
        >
          {/* Availability Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/4 dark:bg-white/4 light:bg-zinc-100/80 border border-white/8 dark:border-white/8 light:border-zinc-200 py-1 px-3 rounded-full mb-8 select-none"
          >
            <span className="w-1.5 h-1.5 bg-accent-emerald rounded-full shadow-[0_0_8px_#10b981] animate-pulse"></span>
            <span className="text-[10px] font-bold text-zinc-650 dark:text-zinc-300 tracking-wider uppercase">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Hero Title */}
          <motion.h1 
            variants={itemVariants}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.15]"
          >
            {t("hero.headline")}{" "}
            <span className="bg-gradient-to-r from-zinc-850 dark:from-white via-accent-purple to-accent-blue bg-clip-text text-transparent inline-block">
              {t("hero.headlineAccent")}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="font-body text-zinc-600 dark:text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-[620px] mx-auto mb-12"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 w-full max-w-sm mx-auto sm:max-w-none"
          >
            <Link 
              to="/realisations" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white light:bg-zinc-900 text-white dark:text-black light:text-white font-body font-semibold text-xs py-3 px-6 rounded-md hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{t("hero.ctaWork")}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center border border-white/8 dark:border-white/8 light:border-zinc-200 hover:border-white/20 dark:hover:border-white/20 light:hover:border-zinc-300 bg-white/3 dark:bg-white/3 light:bg-white hover:bg-white/8 dark:hover:bg-white/8 light:hover:bg-zinc-50 text-zinc-900 dark:text-white light:text-zinc-900 font-body font-semibold text-xs py-3 px-6 rounded-md backdrop-blur-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>{t("hero.ctaContact")}</span>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-white/8 dark:border-white/8 light:border-zinc-200 pt-8 max-w-[600px] mx-auto"
          >
            <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider mb-4">
              {t("hero.trustTitle")}
            </p>
            <div className="flex justify-center gap-6 flex-wrap select-none">
              <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs font-normal">
                <MapPin className="w-3.5 h-3.5 text-accent-blue" />
                <span>{t("hero.trustLoc")}</span>
              </span>
              <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs font-normal">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-blue" />
                <span>{t("hero.trustRoi")}</span>
              </span>
              <span className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 text-xs font-normal">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-blue" />
                <span>{t("hero.trustSec")}</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

