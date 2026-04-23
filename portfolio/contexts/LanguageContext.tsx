'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import vi from '@/locales/vi';
import en from '@/locales/en';

type Lang = 'vi' | 'en';
type LocaleData = typeof vi;

interface LanguageContextType {
  lang: Lang;
  t: LocaleData;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('vi');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-lang') as Lang | null;
    if (saved === 'vi' || saved === 'en') setLang(saved);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'vi' ? 'en' : 'vi';
      localStorage.setItem('portfolio-lang', next);
      return next;
    });
  };

  const t = lang === 'vi' ? vi : en;

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
