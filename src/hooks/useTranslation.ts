import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations } from '@/lib/translations';
import type { Translation } from '@/lib/translations';
import { useEffect } from 'react';
import { defaultLocale, getLocaleFromPathname, type Locale } from '@/lib/i18n';

interface LanguageStore {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: Translation;
}

const getLanguageFromUrl = (): Locale => {
  if (typeof window === 'undefined') return defaultLocale;
  return getLocaleFromPathname(window.location.pathname);
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => {
      const urlLanguage = getLanguageFromUrl();
      return {
        language: urlLanguage,
        setLanguage: (language: Locale) => {
          set({
            language,
            t: translations[language]
          });
        },
        t: translations[urlLanguage],
      };
    },
    {
      name: 'language-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          const urlLanguage = getLanguageFromUrl();
          state.language = urlLanguage;
          state.t = translations[urlLanguage];
        }
      },
    }
  )
);

export const useTranslation = () => {
  const { language, setLanguage, t } = useLanguageStore();

  useEffect(() => {
    const urlLanguage = getLanguageFromUrl();
    if (urlLanguage !== language) {
      setLanguage(urlLanguage);
    }
  }, []);

  return {
    language,
    setLanguage,
    t,
  };
};