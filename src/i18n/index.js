import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import fi from "./locales/fi.json";

const messages = {
  en: {
    nav: {
      home: "Home",
      result: "Results",
    },
    home: {
      header: "Welcome to Career Scouter!",
    },
    result: {
      header: "Results",
    },
  },
  fi: {
    nav: {
      home: "Koti",
      result: "Tuloksia",
    },
    home: {
      header: "Tervetuloa Career Scouteriin!",
    },
    result: {
      header: "Tuloksia",
    },
  },
};

export default createI18n({
  locale: import.meta.env.VITE_DEFAULT_LOCALE,
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  legacy: false,
  globalInjection: true,
  messages: {
    en,
    fi,
  },
});
