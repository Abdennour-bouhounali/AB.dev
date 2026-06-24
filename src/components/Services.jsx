import { useTranslation } from 'react-i18next';
import { LayoutTemplate, ShoppingBag, Cpu, Check } from 'lucide-react';
import { services } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  LayoutTemplate: LayoutTemplate,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu
};

export default function Services() {
  const { t } = useTranslation();

  const localizedServices = services.map((service) => {
    const key = service.id;
    return {
      ...service,
      title: t(`services.${key}.title`),
      description: t(`services.${key}.desc`),
      features: [
        t(`services.${key}.feat1`),
        t(`services.${key}.feat2`),
        t(`services.${key}.feat3`)
      ],
      value: t(`services.${key}.val`)
    };
  });

  return (
    <section id="services" className="py-20 sm:py-24 bg-brand-dark-gray border-t border-white/8">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
            {t("services.title")}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
            {t("services.headline")}
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-[520px] mx-auto mt-4 leading-relaxed">
            {t("services.desc")}
          </p>
        </div>

        {/* Services Grid (1 card on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedServices.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <ScrollReveal 
                key={service.id} 
                direction="up" 
                className="flex"
              >
                <div className="w-full bg-surface-card border border-white/8 p-6 sm:p-8 rounded-md flex flex-col hover:border-accent-blue hover:shadow-[0_10px_30px_rgba(0,102,255,0.12)] transition-all duration-300">
                  <div className="w-11 h-11 bg-accent-blue/12 rounded-sm flex items-center justify-center mb-6">
                    {IconComponent && <IconComponent className="w-5 h-5 text-accent-blue" />}
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="list-none flex flex-col gap-2.5 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-zinc-400 text-[10px] sm:text-[11px] leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Value callout */}
                  <div className="border-t border-white/5 pt-4 text-[10px] text-zinc-450">
                    <strong className="text-white font-semibold">Value: </strong>
                    <span>{service.value}</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
