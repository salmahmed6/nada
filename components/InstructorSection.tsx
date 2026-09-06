'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { instructor } from '@/data/instructor';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function InstructorSection() {
  const { locale, t } = useLanguage();
  const info = instructor[locale];

  return (
    <section className="instructor-section" aria-labelledby="instructor-name">
      <div className="instructor-card">
        <div className="instructor-photo">
          <Image
            src="/instructor.svg"
            alt={info.name}
            width={104}
            height={104}
            className="instructor-photo-image"
          />
        </div>
        <div className="instructor-info">
          <h2 id="instructor-name" className="instructor-name">{info.name}</h2>
          <p className="instructor-role">{info.role}</p>
          <p className="instructor-desc">{info.bio}</p>
          <p className="instructor-education">{info.education}</p>
          <p className="instructor-graduation">{info.graduation}</p>
          <div className="instructor-skills" aria-label={locale === 'ar' ? 'المهارات' : 'Skills'}>
            {info.skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
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
