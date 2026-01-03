import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { translations } from '@/lib/translations';
import type { Translation } from '@/lib/translations';
import { useEffect, useCallback } from 'react';
import { defaultLocale, getLocaleFromPathname, type Locale } from '@/lib/i18n';

interface LanguageStore {
  language: Locale;
  hydrated: boolean;
  setLanguage: (language: Locale) => void;
  syncWithUrl: () => void;
  t: Translation;
}

const getLanguageFromUrl = (): Locale => {
  if (typeof window === 'undefined') return defaultLocale;
  return getLocaleFromPathname(window.location.pathname);
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set, get) => {
      const urlLanguage = getLanguageFromUrl();
      return {
        language: urlLanguage,
        hydrated: false,
        setLanguage: (language: Locale) => {
          set({
            language,
            t: translations[language]
          });
        },
        syncWithUrl: () => {
          const urlLanguage = getLanguageFromUrl();
          const currentLanguage = get().language;
          if (urlLanguage !== currentLanguage) {
            set({
              language: urlLanguage,
              t: translations[urlLanguage]
            });
          }
        },
        t: translations[urlLanguage],
      };
    },
    {
      name: 'language-storage',
      partialize: (state) => ({ language: state.language }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          const urlLanguage = getLanguageFromUrl();
          state.language = urlLanguage;
          state.t = translations[urlLanguage];
          state.hydrated = true;
        }
      },
    }
  )
);

export const useTranslation = () => {
  const { language, setLanguage, syncWithUrl, t, hydrated } = useLanguageStore();

  // Sync with URL on mount and on navigation
  useEffect(() => {
    syncWithUrl();

    // Listen for Astro page navigation
    const handlePageLoad = () => syncWithUrl();
    document.addEventListener('astro:page-load', handlePageLoad);

    return () => {
      document.removeEventListener('astro:page-load', handlePageLoad);
    };
  }, [syncWithUrl]);

  return {
    language,
    setLanguage,
    t,
    hydrated,
  };
};