'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="site-footer">
      <p className="footer-text">{t.footer.cta}</p>
      <a
        href={getWhatsAppLink(t.instructor.inquiryMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
      >
        {t.footer.button}
      </a>
    </footer>
  );
}
