import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

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
    { label: "Accueil", to: "/" },
    { label: t("nav.services"), to: "/solutions" },
    { label: t("nav.work"), to: "/realisations" },
    { label: t("nav.about"), to: "/a-propos" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-brand-black/80 dark:bg-brand-black/80 light:bg-white/90 backdrop-blur-md border-b border-white/8 dark:border-white/8 light:border-zinc-200/60 py-3" 
            : "border-b border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 max-w-[1100px] flex items-center justify-between">
          <Link to="/" className="font-heading font-extrabold text-xl tracking-tight text-white dark:text-white light:text-zinc-900">
            <span className="text-accent-blue">Edu</span>Nex
          </Link>
          
          {/* Desktop Nav links */}
          <nav className="hidden md:flex gap-4 bg-white/3 dark:bg-white/3 light:bg-zinc-150 border border-white/8 dark:border-white/8 light:border-zinc-200 py-1 px-4 rounded-full backdrop-blur-sm items-center">
            {navItems.map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className={`font-body text-xs font-normal transition-colors duration-200 px-2 py-1.5 block ${
                  location.pathname === item.to 
                    ? "text-accent-blue font-semibold" 
                    : "text-zinc-400 dark:text-zinc-400 light:text-zinc-650 hover:text-white dark:hover:text-white light:hover:text-zinc-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Theme Switcher & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center border border-white/8 dark:border-white/8 light:border-zinc-200 bg-brand-dark-gray dark:bg-brand-dark-gray light:bg-zinc-100 hover:border-white/20 dark:hover:border-white/20 light:hover:border-zinc-350 hover:bg-white/3 dark:hover:bg-white/3 light:hover:bg-zinc-200 text-white dark:text-white light:text-zinc-900 text-xs font-medium py-2 px-5 rounded-md backdrop-blur-md transition-all duration-200"
            >
              {t("nav.cta")}
            </Link>
          </div>

          {/* Mobile Theme Switcher & hamburger toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button 
              onClick={toggleDrawer}
              className="flex flex-col justify-between w-5 h-3.5 bg-transparent border-none cursor-pointer z-55 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isDrawerOpen ? (
                <X className="w-5 h-5 text-white dark:text-white light:text-zinc-900" />
              ) : (
                <div className="w-full flex flex-col gap-1">
                  <span className="w-5 h-[1.5px] bg-white dark:bg-white light:bg-zinc-900 rounded-full"></span>
                  <span className="w-5 h-[1.5px] bg-white dark:bg-white light:bg-zinc-900 rounded-full"></span>
                  <span className="w-5 h-[1.5px] bg-white dark:bg-white light:bg-zinc-900 rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile navigation drawer */}
      <div 
        className={`fixed top-0 right-0 w-full h-screen bg-brand-black dark:bg-brand-black light:bg-zinc-50 border-l border-white/8 dark:border-white/8 light:border-zinc-200 z-40 flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.to} 
              to={item.to} 
              onClick={handleLinkClick}
              className={`font-heading text-lg font-medium transition-colors duration-200 ${
                location.pathname === item.to 
                  ? "text-accent-blue" 
                  : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={handleLinkClick}
            className="mt-4 border border-accent-blue bg-accent-blue/10 hover:bg-accent-blue/20 text-white dark:text-white light:text-zinc-900 font-heading font-semibold text-sm py-3 px-8 rounded-md transition-all duration-200"
          >
            {t("nav.cta")}
          </Link>
        </nav>
      </div>
    </>
  );
}
