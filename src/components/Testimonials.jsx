import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { testimonials } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-20 sm:py-24 bg-brand-dark-gray border-t border-white/8">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
            {t("testimonials.title")}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
            {t("testimonials.headline")}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-[520px] mx-auto mt-4 leading-relaxed">
            {t("testimonials.desc")}
          </p>
        </div>

        {/* Testimonials Grid (1 card on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonialItem, index) => (
            <ScrollReveal 
              key={index} 
              direction="up" 
              className="flex"
            >
              <div className="w-full bg-surface-card border border-white/8 p-6 sm:p-8 rounded-md flex flex-col justify-between hover:border-white/15 transition-all duration-200">
                <div>
                  <div className="flex gap-0.5 mb-4 justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent-blue text-accent-blue" />
                    ))}
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed italic mb-6">
                    "{t(`testimonials.items.${index}.quote`)}"
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col">
                    <span className="font-heading font-semibold text-white text-xs">
                      {t(`testimonials.items.${index}.name`)}
                    </span>
                    <span className="text-[10px] text-zinc-500">
                      {t(`testimonials.items.${index}.role`)}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
