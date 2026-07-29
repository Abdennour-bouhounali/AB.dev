import { useTranslation } from 'react-i18next';
import { LayoutTemplate, ShoppingBag, Cpu, Check, Globe, Layers, Workflow, BrainCircuit } from 'lucide-react';
import { services } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const iconMap = {
  LayoutTemplate: LayoutTemplate,
  ShoppingBag: ShoppingBag,
  Cpu: Cpu,
  Globe: Globe,
  Layers: Layers,
  Workflow: Workflow,
  BrainCircuit: BrainCircuit
};

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 sm:py-24 bg-brand-dark-gray dark:bg-brand-dark-gray light:bg-zinc-50 border-t border-white/8 dark:border-white/8 light:border-zinc-200">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
            {t("services.title")}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-900 dark:text-white tracking-tight leading-snug">
            {t("services.headline")}
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm max-w-[520px] mx-auto mt-4 leading-relaxed">
            {t("services.desc")}
          </p>
        </div>

        {/* Services Grid (1 card on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Cpu;
            return (
              <ScrollReveal 
                key={service.id} 
                direction="up" 
                className="flex"
              >
                <div className="w-full bg-surface-card dark:bg-surface-card light:bg-white border border-white/8 dark:border-white/8 light:border-zinc-200 p-6 sm:p-8 rounded-md flex flex-col hover:border-accent-blue dark:hover:border-accent-blue light:hover:border-accent-blue hover:shadow-[0_10px_30px_rgba(0,102,255,0.06)] transition-all duration-300">
                  <div className="w-11 h-11 bg-accent-blue/12 rounded-sm flex items-center justify-center mb-6">
                    <IconComponent className="w-5 h-5 text-accent-blue" />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-white text-sm sm:text-base mb-4">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>
                  
                  {/* Features list */}
                  <ul className="list-none flex flex-col gap-2.5 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-[10px] sm:text-[11px] leading-relaxed">
                        <Check className="w-3.5 h-3.5 text-accent-blue flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Value callout */}
                  <div className="border-t border-white/5 dark:border-white/5 light:border-zinc-200 pt-4 text-[10px] text-zinc-550 dark:text-zinc-400">
                    <strong className="text-zinc-900 dark:text-white font-semibold">Bénéfice : </strong>
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
