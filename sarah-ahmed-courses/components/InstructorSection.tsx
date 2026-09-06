'use client';

import { useLanguage } from '@/context/LanguageContext';
import { instructor } from '@/data/instructor';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function InstructorSection() {
  const { locale, t } = useLanguage();
  const info = instructor[locale];

  return (
    <section className="instructor-section" aria-labelledby="instructor-name">
      <div className="instructor-card">
        {/*
          Placeholder avatar until a real photo is provided.
          Swap this div for an <Image src="/instructor.jpg" alt={info.name} .../>
          from next/image when the photo is available.
        */}
        <div className="instructor-photo" role="img" aria-label={info.name}>
          {info.initials}
        </div>
        <div className="instructor-info">
          <h2 id="instructor-name" className="instructor-name">
            {info.name}
          </h2>
          <p className="instructor-role">{info.role}</p>
          <p className="instructor-desc">{info.bio}</p>
          <a
            href={getWhatsAppLink(t.instructor.inquiryMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            {t.instructor.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
