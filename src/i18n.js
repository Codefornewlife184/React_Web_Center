import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Dil dosyalarını içe aktarın
import translationEN from "./locales/en/en.json";
import translationTR from "./locales/tr/tr.json";

// Dil dosyalarını tanımlayın
const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "tr", // Varsayılan dil Türkçe olarak değiştirildi
  fallbackLng: "tr", // Yedek dil
  interpolation: {
    escapeValue: false,
  },
});

// i18n'i global olarak erişilebilir yap
window.i18n = i18n;

export default i18n;
