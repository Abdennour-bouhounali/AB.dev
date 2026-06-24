import { useTranslation } from 'react-i18next';
import { developerInfo } from '../data/portfolioData';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-black pt-16">
      <div className="container mx-auto px-6 max-w-[1100px] grid grid-cols-1 md:grid-cols-2 gap-12 pb-12">
        <div className="max-w-[320px]">
          <a href="#" className="font-heading font-extrabold text-xl tracking-tight text-white inline-block mb-3">
            <span className="text-accent-blue">AB</span>.dev
          </a>
          <p className="text-zinc-400 text-xs font-normal leading-relaxed">
            {t("footer.desc")}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">
              {t("footer.nav")}
            </h4>
            <a href="#about" className="text-zinc-400 hover:text-white text-xs transition-colors duration-150">
              {t("nav.about")}
            </a>
            <a href="#services" className="text-zinc-400 hover:text-white text-xs transition-colors duration-150">
              {t("nav.services")}
            </a>
            <a href="#projects" className="text-zinc-400 hover:text-white text-xs transition-colors duration-150">
              {t("nav.work")}
            </a>
            <a href="#process" className="text-zinc-400 hover:text-white text-xs transition-colors duration-150">
              {t("nav.process")}
            </a>
            <a href="#faq" className="text-zinc-400 hover:text-white text-xs transition-colors duration-150">
              {t("nav.faq")}
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold mb-1">
              {t("footer.general")}
            </h4>
            <a href="#privacy" className="text-zinc-400 hover:text-white text-xs transition-colors duration-150">
              {t("footer.privacy")}
            </a>
            <a href="#terms" className="text-zinc-400 hover:text-white text-xs transition-colors duration-150">
              {t("footer.terms")}
            </a>
            <span className="self-start text-[10px] font-semibold bg-white/4 border border-white/8 text-zinc-300 py-0.5 px-2 rounded-sm mt-1.5">
              {t("footer.based")} {developerInfo.location}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8 py-8">
        <div className="container mx-auto px-6 max-w-[1100px] flex flex-col-reverse md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-zinc-500">
            &copy; {currentYear} {developerInfo.name}. {t("footer.rights")}
          </p>
          <div className="flex gap-4">
            <a 
              href={developerInfo.socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            <a 
              href={developerInfo.socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
