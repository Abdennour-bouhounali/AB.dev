import { useTranslation } from 'react-i18next';
import { Zap, Target } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 sm:py-24 border-t border-white/8">
      <div className="container mx-auto px-6 max-w-[1100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start md:items-center">
          
          {/* Side header */}
          <ScrollReveal direction="left" className="max-w-[440px]">
            <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
              {t("about.title")}
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
              {t("about.headline")}
            </h2>
          </ScrollReveal>

          {/* About details */}
          <ScrollReveal direction="right" className="flex flex-col gap-6">
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {t("about.desc1")}
            </p>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              {t("about.desc2")}
            </p>
            
            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-surface-card border border-white/8 p-5 sm:p-6 rounded-md hover:border-white/15 hover:bg-surface-card-hover transition-colors duration-200">
                <div className="w-9 h-9 bg-accent-purple/12 rounded-sm flex items-center justify-center mb-4">
                  <Zap className="w-4 h-4 text-accent-purple" />
                </div>
                <h3 className="font-heading font-semibold text-white text-xs sm:text-sm mb-2">
                  {t("about.pillar1Title")}
                </h3>
                <p className="text-zinc-400 text-[10px] sm:text-[11px] leading-relaxed">
                  {t("about.pillar1Desc")}
                </p>
              </div>
              <div className="bg-surface-card border border-white/8 p-5 sm:p-6 rounded-md hover:border-white/15 hover:bg-surface-card-hover transition-colors duration-200">
                <div className="w-9 h-9 bg-accent-purple/12 rounded-sm flex items-center justify-center mb-4">
                  <Target className="w-4 h-4 text-accent-purple" />
                </div>
                <h3 className="font-heading font-semibold text-white text-xs sm:text-sm mb-2">
                  {t("about.pillar2Title")}
                </h3>
                <p className="text-zinc-400 text-[10px] sm:text-[11px] leading-relaxed">
                  {t("about.pillar2Desc")}
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
