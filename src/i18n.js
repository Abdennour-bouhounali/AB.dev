import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frTranslation from './locales/fr/translation.json';
import enTranslation from './locales/en/translation.json';
import arTranslation from './locales/ar/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslation },
      en: { translation: enTranslation },
      ar: { translation: arTranslation }
    },
    fallbackLng: 'fr',
    detection: {
      order: ['localStorage'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false
    }
  });

// Dynamically handle text direction (RTL/LTR) & language attribute changes
i18n.on('languageChanged', (lng) => {
  const dir = lng.startsWith('ar') ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
});

// Establish direction on launch
const activeLng = i18n.resolvedLanguage || i18n.language || 'fr';
document.documentElement.dir = activeLng.startsWith('ar') ? 'rtl' : 'ltr';
document.documentElement.lang = activeLng;

export default i18n;
