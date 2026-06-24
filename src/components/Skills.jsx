import { useTranslation } from 'react-i18next';
import { skills } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const { t } = useTranslation();

  const getBadgeClass = (level) => {
    switch (level) {
      case 'react':
        return 'bg-accent-blue/10 text-accent-blue';
      case 'tailwind':
        return 'bg-accent-purple/10 text-accent-purple';
      case 'laravel':
        return 'bg-accent-purple/10 text-accent-purple';
      case 'db':
        return 'bg-white/5 text-white';
      case 'api':
        return 'bg-accent-blue/10 text-accent-blue';
      default:
        return 'bg-white/5 text-zinc-400';
    }
  };

  return (
    <section className="py-20 sm:py-24 border-t border-white/8">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
            {t("skills.title")}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
            {t("skills.headline")}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-[520px] mx-auto mt-4 leading-relaxed">
            {t("skills.desc")}
          </p>
        </div>

        {/* Skills Grid (1 col on mobile, 2 on sm, 3 on md, 4 on lg/desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <ScrollReveal 
              key={skill.name} 
              direction="up" 
              className="flex"
            >
              <div className="w-full bg-surface-card border border-white/8 p-6 rounded-md hover:border-white/15 hover:bg-surface-card-hover transition-all duration-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-white text-sm">
                    {skill.name}
                  </h3>
                  <span className={`text-[9px] font-bold uppercase py-0.5 px-2 rounded-sm ${getBadgeClass(skill.level)}`}>
                    {skill.category === 'Frontend' ? t("skills.frontend") : t("skills.backend")}
                  </span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  {t(`skills.items.${skill.name.toLowerCase()}`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
