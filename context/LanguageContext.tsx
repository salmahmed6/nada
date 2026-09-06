'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, Locale, Dictionary } from '@/data/translations';

type LanguageContextValue = {
  locale: Locale;
  dir: 'rtl' | 'ltr';
  t: Dictionary;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'site-locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('ar');

  // Pick up a previously chosen language on mount (default stays Arabic).
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') {
      setLocale(stored);
    }
  }, []);

  // Keep <html lang/dir> and storage in sync whenever the language changes.
  useEffect(() => {
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const toggleLocale = () => setLocale((prev) => (prev === 'ar' ? 'en' : 'ar'));

  const value: LanguageContextValue = {
    locale,
    dir: locale === 'ar' ? 'rtl' : 'ltr',
    t: translations[locale],
    toggleLocale,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
