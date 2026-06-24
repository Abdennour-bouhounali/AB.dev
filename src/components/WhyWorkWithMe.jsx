import { useTranslation } from 'react-i18next';
import { Languages, Clock, Smartphone, Search, Code2, ShieldCheck, HeartHandshake } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyWorkWithMe() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: Languages,
      title: t("why.supportFr"),
      desc: "Direct communication in French for clients based in France or Europe.",
      color: "text-accent-blue bg-accent-blue/10 border-accent-blue/20"
    },
    {
      icon: Languages,
      title: t("why.supportEn"),
      desc: "Full business fluency for global, international collaboration.",
      color: "text-accent-purple bg-accent-purple/10 border-accent-purple/20"
    },
    {
      icon: Languages,
      title: t("why.supportAr"),
      desc: "Native Arabic communication including complete RTL direction support.",
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20"
    },
    {
      icon: Clock,
      title: t("why.fastDelivery"),
      desc: "Agile workflows and rapid prototyping to hit launch deadlines without lag.",
      color: "text-accent-purple bg-accent-purple/10 border-accent-purple/20"
    },
    {
      icon: Smartphone,
      title: t("why.mobileFirst"),
      desc: "Perfect display across all mobile dimensions (from 320px to large desktop screens).",
      color: "text-accent-blue bg-accent-blue/10 border-accent-blue/20"
    },
    {
      icon: Search,
      title: t("why.seoReady"),
      desc: "Fully optimized semantic HTML structure and JSON-LD schemas for search engines.",
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20"
    },
    {
      icon: Code2,
      title: t("why.modernStack"),
      desc: "Utilizing React, Tailwind CSS, and Laravel for secure, maintainable codebases.",
      color: "text-accent-purple bg-accent-purple/10 border-accent-purple/20"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-brand-black border-t border-white/8 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
            {t("why.title")}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-snug">
            Strategic advantages for your business
          </h2>
        </div>

        {/* Advantage Cards Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal 
                key={index}
                direction="up"
                className="flex"
              >
                <div className="w-full bg-surface-card border border-white/8 p-6 sm:p-8 rounded-md flex flex-col hover:border-white/15 hover:bg-surface-card-hover transition-all duration-300">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center mb-6 border ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-white text-sm sm:text-base mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
