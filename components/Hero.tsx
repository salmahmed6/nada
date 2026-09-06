'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-rule" aria-hidden="true" />
      <h1 className="hero-title">{t.hero.title}</h1>
      <p className="hero-sub">{t.hero.subtitle}</p>
      <a href="#courses" className="btn-primary">
        {t.hero.cta}
      </a>
    </section>
  );
}
