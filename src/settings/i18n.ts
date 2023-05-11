import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { dictionary } from '@/types/constants';

import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';

const { DEFAULT_APP_LANGUAGE } = dictionary;

const resources = {
    en: {
        translation: translationEN,
    },
    ru: {
        translation: translationRU,
    },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('i18nextLng') || DEFAULT_APP_LANGUAGE,
        fallbackLng: DEFAULT_APP_LANGUAGE,
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: './locales/{{lng}}/translation.json',
            crossDomain: true,
        },
    });

export default i18n;
