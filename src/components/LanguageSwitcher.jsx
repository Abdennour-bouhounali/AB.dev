import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'fr', label: 'Français' },
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.resolvedLanguage) || languages[0];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative select-none" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 border border-white/8 hover:border-white/20 bg-white/3 text-white text-xs font-semibold py-1.5 px-3.5 rounded-full transition-all duration-200 cursor-pointer"
        aria-expanded={isOpen}
        aria-label="Change language"
      >
        <Globe className="w-3.5 h-3.5 text-zinc-400" />
        <span className="uppercase text-[10px] tracking-wide">{currentLanguage.code}</span>
        <ChevronDown className={`w-3 h-3 text-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute end-0 mt-2 w-32 bg-surface-card border border-white/8 rounded-md shadow-2xl py-1.5 z-50 backdrop-blur-md"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors hover:bg-white/5 cursor-pointer ${
                  i18n.resolvedLanguage === lang.code 
                    ? 'text-accent-blue font-bold bg-white/3' 
                    : 'text-zinc-350 hover:text-white'
                } ${lang.code === 'ar' ? 'text-right font-heading' : ''}`}
              >
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
