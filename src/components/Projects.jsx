import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolioData';
import AnimatedCounter from './AnimatedCounter';
import Magnetic from './Magnetic';

export default function Projects() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState('all');
  const [activeSlides, setActiveSlides] = useState({
    tagemi: 0,
    fisora: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlides((prev) => {
        const nextState = { ...prev };
        projects.forEach((project) => {
          const currentIdx = prev[project.id] || 0;
          const totalImages = project.images ? project.images.length : 1;
          nextState[project.id] = (currentIdx + 1) % totalImages;
        });
        return nextState;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (projectId, index) => {
    setActiveSlides((prev) => ({
      ...prev,
      [projectId]: index
    }));
  };

  const localizedProjects = projects.map((project) => {
    const key = project.id;
    return {
      ...project,
      title: t(`projects.${key}.title`),
      summary: t(`projects.${key}.summary`),
      bullets: [
        t(`projects.${key}.bullet1`),
        t(`projects.${key}.bullet2`),
        t(`projects.${key}.bullet3`)
      ],
      metrics: [
        { 
          num: t(`projects.${key}.metric1Val`), 
          label: t(`projects.${key}.metric1Lbl`) 
        },
        { 
          num: t(`projects.${key}.metric2Val`), 
          label: t(`projects.${key}.metric2Lbl`) 
        }
      ]
    };
  });

  const filteredProjects = localizedProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'ecommerce') return project.type === 'shop';
    if (filter === 'nonprofit') return project.type === 'foundation';
    return true;
  });

  return (
    <section id="projects" className="py-28 bg-brand-dark-gray border-t border-white/8 relative overflow-hidden">
      
      {/* Background glow overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-blue/5 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3"
          >
            {t("projects.title")}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-heading font-bold text-3xl sm:text-4xl text-white tracking-tight leading-snug"
          >
            {t("projects.subtitle")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-xs sm:text-sm max-w-[500px] mx-auto mt-4 leading-relaxed"
          >
            {t("projects.desc")}
          </motion.p>
        </div>

        {/* Dynamic Filtering Tabs */}
        <div className="flex justify-center gap-3 mb-20 select-none">
          {[
            { id: 'all', label: t("projects.tabs.all") },
            { id: 'ecommerce', label: t("projects.tabs.ecommerce") },
            { id: 'nonprofit', label: t("projects.tabs.nonprofit") }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`relative px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                filter === tab.id 
                  ? 'text-white border-accent-blue/30 bg-accent-blue/8 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                  : 'text-zinc-400 border-white/8 hover:text-white hover:border-white/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects list */}
        <motion.div layout className="flex flex-col gap-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isReversed = index % 2 !== 0;
              const currentSlide = activeSlides[project.id] ?? 0;

              return (
                <motion.div 
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 45 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -25, scale: 0.96 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  
                  {/* Info block */}
                  <div className={`lg:col-span-6 flex flex-col ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}>
                    <span className="text-[10px] font-bold text-accent-purple mb-2 tracking-widest uppercase select-none">
                      0{index + 1} / {t("projects.study")}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4 tracking-tight hover:text-accent-blue transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Bullet results list */}
                    <ul className="flex flex-col gap-3 mb-6">
                      {project.bullets.map((bullet, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <span className="w-4 h-4 rounded-full bg-accent-blue/10 border border-accent-blue/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-accent-blue" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((techItem) => (
                        <motion.span 
                          key={techItem}
                          whileHover={{ scale: 1.05, borderColor: 'rgba(99, 91, 255, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                          className="text-[10px] font-semibold text-white bg-white/3 border border-white/8 py-1 px-3 rounded-full cursor-default select-none transition-colors"
                        >
                          {techItem}
                        </motion.span>
                      ))}
                    </div>

                    {/* Metrics with Animated Counter */}
                    <div className="flex gap-8 border-t border-white/5 pt-6 mb-8">
                      {project.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="flex flex-col">
                          <span className="font-heading font-bold text-xl sm:text-2xl text-white">
                            <AnimatedCounter value={metric.num} />
                          </span>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* External link with Magnetic Wrapper */}
                    <Magnetic>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-white border-b-2 border-accent-blue pb-0.5 self-start hover:text-accent-purple hover:border-accent-purple transition-all duration-200"
                      >
                        <span>{t("projects.visit")} {project.domain}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Magnetic>
                  </div>

                  {/* Visual Mockup block */}
                  <div className={`lg:col-span-6 flex items-center justify-center ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}>
                    <motion.a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                      className="w-full max-w-[480px] h-[380px] bg-black border border-white/8 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.6)] flex flex-col overflow-hidden hover:border-accent-blue/30 transition-colors duration-300 group/mockup cursor-pointer"
                    >
                      
                      {/* Mockup Header */}
                      <div className="h-7.5 bg-surface-card flex items-center px-3.5 gap-1.5 border-b border-white/8 flex-shrink-0">
                        <div className="flex gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-zinc-700"></span>
                        </div>
                        <span className="text-[9px] text-zinc-500 font-mono ml-4 select-none">
                          {project.domain}
                        </span>
                      </div>

                      {/* Mockup Body with Scrollable Carousel */}
                      <div className="flex-grow relative bg-[#030303] overflow-hidden select-none">
                        <AnimatePresence mode="wait">
                          {project.images && project.images.map((img, imgIdx) => (
                            currentSlide === imgIdx && (
                              <motion.div 
                                key={imgIdx}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                              >
                                <img 
                                  src={img} 
                                  alt={`${project.title} screenshot ${imgIdx + 1}`}
                                  className="w-full h-full object-cover object-top transition-transform duration-[6s] ease-in-out group-hover/mockup:scale-103"
                                />
                              </motion.div>
                            )
                          ))}
                        </AnimatePresence>

                        {/* Ambient shadow gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 z-15 pointer-events-none" />

                        {/* Interactive slide indicators */}
                        {project.images && project.images.length > 1 && (
                          <div className="absolute bottom-4.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-20 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                            {project.images.map((_, imgIdx) => (
                              <button
                                key={imgIdx}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleSlideChange(project.id, imgIdx);
                                }}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                                  currentSlide === imgIdx 
                                    ? "bg-accent-blue scale-125 shadow-[0_0_6px_#3b82f6]" 
                                    : "bg-white/30 hover:bg-white/60"
                                }`}
                                title={`Slide ${imgIdx + 1}`}
                                aria-label={`Go to slide ${imgIdx + 1}`}
                              />
                            ))}
                          </div>
                        )}
                      </div>

                    </motion.a>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
