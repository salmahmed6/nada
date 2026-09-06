'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { instructor } from '@/data/instructor';

export default function Nav() {
  const { locale, t, toggleLocale } = useLanguage();
  const info = instructor[locale];

  return (
    <header className="nav">
      <Link href="/" className="nav-name">
        {info.name}
      </Link>
      <button type="button" className="lang-toggle" onClick={toggleLocale}>
        {t.nav.switchTo}
      </button>
    </header>
  );
}
