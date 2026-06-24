import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { faqs } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-24 border-t border-white/8">
      <div className="container mx-auto px-6 max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Left Side */}
        <ScrollReveal direction="left" className="max-w-[440px] flex flex-col justify-between">
          <div>
            <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
              {t("faq.title")}
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
              {t("faq.headline")}
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm mt-4 leading-relaxed">
              {t("faq.desc")}
            </p>
          </div>
          
          <div className="mt-8 p-6 bg-brand-dark-gray border border-white/8 rounded-md hidden lg:block">
            <p className="text-zinc-400 text-xs mb-3">{t("faq.askTitle")}</p>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:text-accent-purple group"
            >
              <span>{t("faq.askCTA")}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Accordions */}
        <ScrollReveal direction="right" className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className={`border border-white/8 bg-brand-dark-gray rounded-sm overflow-hidden transition-all duration-200 ${
                  isOpen ? "bg-surface-card border-white/15" : "hover:border-white/15"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 bg-transparent border-none text-start cursor-pointer focus:outline-none"
                >
                  <span className="font-heading font-semibold text-white text-xs sm:text-sm pe-4">
                    {t(`faq.q${index + 1}`)}
                  </span>
                  <ChevronDown 
                    className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-250 ${
                      isOpen ? "transform rotate-180 text-accent-blue" : ""
                    }`} 
                  />
                </button>
                
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{ maxHeight: isOpen ? '240px' : '0px' }}
                >
                  <div className="p-6 pt-0 text-zinc-400 text-xs leading-relaxed border-t border-white/3">
                    {t(`faq.a${index + 1}`)}
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollReveal>

      </div>
    </section>
  );
}
