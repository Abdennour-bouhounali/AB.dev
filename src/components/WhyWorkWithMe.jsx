import { useTranslation } from 'react-i18next';
import { Languages, Clock, Smartphone, Search, Code2, ShieldCheck, HeartHandshake } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function WhyWorkWithMe() {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: Languages,
      title: t("why.supportFr"),
      desc: "Communication directe en français pour une collaboration simple, fluide et réactive.",
      color: "text-accent-blue bg-accent-blue/10 border-accent-blue/20"
    },
    {
      icon: ShieldCheck,
      title: t("why.supportEn"),
      desc: "Un accompagnement technique réactif et basé en France pour répondre à vos urgences.",
      color: "text-accent-purple bg-accent-purple/10 border-accent-purple/20"
    },
    {
      icon: HeartHandshake,
      title: t("why.supportAr"),
      desc: "Des cycles de développement courts avec des livraisons hebdomadaires sur environnement de staging.",
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20"
    },
    {
      icon: Clock,
      title: t("why.fastDelivery"),
      desc: "Planification rigoureuse et sprints de développement pour garantir le respect de vos dates de lancement.",
      color: "text-accent-purple bg-accent-purple/10 border-accent-purple/20"
    },
    {
      icon: Smartphone,
      title: t("why.mobileFirst"),
      desc: "Interfaces entièrement optimisées pour tous les écrans, du smartphone à l'écran géant.",
      color: "text-accent-blue bg-accent-blue/10 border-accent-blue/20"
    },
    {
      icon: Search,
      title: t("why.seoReady"),
      desc: "Code sémantique optimisé et temps de chargement ultra-rapides pour maximiser votre classement Google.",
      color: "text-accent-emerald bg-accent-emerald/10 border-accent-emerald/20"
    },
    {
      icon: Code2,
      title: t("why.modernStack"),
      desc: "Utilisation de React, Tailwind CSS et Laravel pour concevoir des produits sécurisés et faciles à maintenir.",
      color: "text-accent-purple bg-accent-purple/10 border-accent-purple/20"
    }
  ];

  return (
    <section className="py-20 sm:py-24 bg-brand-black dark:bg-brand-black light:bg-zinc-50 border-t border-white/8 dark:border-white/8 light:border-zinc-200 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1100px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[10px] uppercase tracking-wider text-accent-blue font-bold mb-3">
            {t("why.title")}
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-900 dark:text-white tracking-tight leading-snug">
            Des avantages stratégiques pour votre entreprise
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
                <div className="w-full bg-surface-card dark:bg-surface-card light:bg-white border border-white/8 dark:border-white/8 light:border-zinc-200 p-6 sm:p-8 rounded-md flex flex-col hover:border-white/15 dark:hover:border-white/15 light:hover:border-zinc-300 hover:bg-surface-card-hover transition-all duration-300">
                  <div className={`w-10 h-10 rounded-sm flex items-center justify-center mb-6 border ${item.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-zinc-900 dark:text-white text-sm sm:text-base mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
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
