import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'react-native-localize';

import translationKo from './translation_ko.json';

i18next.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'ko',
  resources: {
    ko: { translation: translationKo },
  },
  interpolation: { escapeValue: false },
});

export default i18next;
