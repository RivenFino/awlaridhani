import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';  // Import terjemahan Inggris
import id from './locales/id/translation.json';  // Import terjemahan Indonesia

i18n
    .use(initReactI18next)  // Integrasi dengan React
    .init({
        resources: {
            en: {
                translation: en,  // Berikan terjemahan bahasa Inggris
            },
            id: {
                translation: id,  // Berikan terjemahan bahasa Indonesia
            },
        },
        lng: 'en',  // Bahasa default
        fallbackLng: 'en',  // Jika bahasa yang dipilih tidak tersedia
        interpolation: {
            escapeValue: false,  // React sudah melindungi dari XSS
        },
    });

export default i18n;
