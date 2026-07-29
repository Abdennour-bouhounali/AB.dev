import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import frTranslation from './locales/fr/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslation }
    },
    lng: 'fr',
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    }
  });

document.documentElement.dir = 'ltr';
document.documentElement.lang = 'fr';

export default i18n;

