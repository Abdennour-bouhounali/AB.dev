import { useTranslation } from 'react-i18next';
import { processSteps } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="py-20 sm:py-24 border-t border-white/8">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
            {t("process.title")}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
            {t("process.headline")}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-[520px] mx-auto mt-4 leading-relaxed">
            {t("process.desc")}
          </p>
        </div>

        {/* Timeline Grid (logical alignment start-3.5 and start-8 for RTL) */}
        <div className="max-w-[800px] mx-auto relative ps-8 sm:ps-16 before:content-[''] before:absolute before:top-0 before:bottom-0 before:start-3.5 sm:before:start-[30px] before:w-[1px] before:bg-gradient-to-b before:from-accent-blue before:via-accent-purple before:to-transparent">
          {processSteps.map((step, index) => (
            <ScrollReveal 
              key={step.num} 
              direction="up" 
              className="relative mb-12 last:mb-0"
            >
              {/* Dot badge */}
              <div className="absolute -start-8 sm:-start-16 w-8 sm:w-[60px] flex justify-center z-10">
                <span className="w-9 h-9 border border-accent-blue bg-black text-white font-heading font-bold text-xs flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(0,102,255,0.15)]">
                  {step.num}
                </span>
              </div>

              {/* Card info */}
              <div className="bg-surface-card border border-white/8 p-5 sm:p-6 rounded-md hover:border-white/15 hover:translate-x-0.5 transition-all duration-200">
                <h3 className="font-heading font-bold text-white text-sm sm:text-base mb-2">
                  {t(`process.steps.${step.num}.title`)}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {t(`process.steps.${step.num}.desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
