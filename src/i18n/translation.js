import i18n from "@/i18n";
const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  async switchLanguage(newLocale) {
    if (this.isLocaleSupported(newLocale)) {
      this.currentLocale = newLocale;
      document.querySelector("html").setAttribute("lang", newLocale);
      localStorage.setItem("user-locale", newLocale);
    } else {
      console.warn(`Locale "${newLocale}" is not supported.`);
    }
  },

  isLocaleSupported(locale) {
    return this.supportedLocales.includes(locale);
  },

  getUserLocale() {
    const locale =
      window.navigator.language ||
      window.navigator.userLanguage ||
      this.defaultLocale;
    return {
      locale: locale,
      localeNoRegion: locale.split("-")[0],
    };
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale");
    if (this.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  guessDefaultLocale() {
    const userPersistedLocale = this.getPersistedLocale();
    if (userPersistedLocale) {
      return userPersistedLocale;
    }
    const userPreferredLocale = this.getUserLocale();
    if (this.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }
    if (this.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }

    return this.defaultLocale;
  },

  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE;
  },
};

// Set the initial language
Trans.currentLocale = Trans.guessDefaultLocale();

export default Trans;
