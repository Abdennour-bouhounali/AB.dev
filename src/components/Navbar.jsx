import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import Magnetic from './Magnetic';

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (!isDrawerOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  };

  const handleLinkClick = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const navItems = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.work"), href: "#projects" },
    { label: t("nav.process"), href: "#process" },
    { label: t("nav.faq"), href: "#faq" }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-brand-black/80 backdrop-blur-md border-b border-white/8 py-3" 
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 max-w-[1100px] flex items-center justify-between">
          <a href="#" className="font-heading font-extrabold text-xl tracking-tight text-white">
            <span className="text-accent-blue">AB</span>.dev
          </a>
          
          {/* Desktop Nav links */}
          <nav className="hidden md:flex gap-4 bg-white/3 border border-white/8 py-1 px-4 rounded-full backdrop-blur-sm items-center">
            {navItems.map((item) => (
              <Magnetic key={item.label}>
                <a 
                  href={item.href} 
                  className="font-body text-xs font-normal text-zinc-400 hover:text-white transition-colors duration-200 px-2 py-1.5 block"
                >
                  {item.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Desktop Language Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Magnetic>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center border border-white/8 bg-brand-dark-gray hover:border-white/20 hover:bg-white/3 text-white text-xs font-medium py-2 px-5 rounded-md backdrop-blur-md transition-all duration-200"
              >
                {t("nav.cta")}
              </a>
            </Magnetic>
          </div>

          {/* Mobile Language Switcher & hamburger toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <LanguageSwitcher />
            <button 
              onClick={toggleDrawer}
              className="flex flex-col justify-between w-5 h-3.5 bg-transparent border-none cursor-pointer z-55 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isDrawerOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <div className="w-full flex flex-col gap-1">
                  <span className="w-5 h-[1.5px] bg-white rounded-full"></span>
                  <span className="w-5 h-[1.5px] bg-white rounded-full"></span>
                  <span className="w-5 h-[1.5px] bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div 
        className={`fixed top-0 right-0 w-full h-screen bg-brand-black border-l border-white/8 z-40 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              onClick={handleLinkClick}
              className="font-heading text-lg font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={handleLinkClick}
            className="mt-4 border border-accent-blue bg-accent-blue/10 hover:bg-accent-blue/20 text-white font-heading font-semibold text-sm py-3 px-8 rounded-md transition-all duration-200"
          >
            {t("nav.cta")}
          </a>
        </nav>
      </div>
    </>
  );
}
