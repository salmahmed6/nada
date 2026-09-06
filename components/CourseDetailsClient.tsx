'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { Course } from '@/data/courses';
import { getWhatsAppLink } from '@/lib/whatsapp';

export default function CourseDetailsClient({ course }: { course: Course }) {
  const { locale, dir, t } = useLanguage();
  const content = course[locale];
  const scheduleDays = content.schedule.days.join(locale === 'ar' ? '، ' : ', ');
  const backArrow = dir === 'rtl' ? '→' : '←';

  return (
    <article className="course-details">
      <Link href="/#courses" className="back-link">
        <span aria-hidden="true">{backArrow}</span> {t.details.back}
      </Link>

      <span className="badge">{content.grade}</span>
      <h1 className="details-title">{content.title}</h1>
      <p className="details-desc">{content.description}</p>

      <dl className="details-meta-grid">
        <div className="meta-item">
          <dt className="meta-label">{t.courses.grade}</dt>
          <dd className="meta-value">{content.grade}</dd>
        </div>
        <div className="meta-item">
          <dt className="meta-label">{t.courses.duration}</dt>
          <dd className="meta-value">{content.duration}</dd>
        </div>
        <div className="meta-item">
          <dt className="meta-label">{t.courses.schedule}</dt>
          <dd className="meta-value">
            {scheduleDays} · {content.schedule.time}
          </dd>
        </div>
      </dl>

      <section className="details-section" aria-labelledby="objectives-heading">
        <h2 id="objectives-heading">{t.details.objectives}</h2>
        <ul>
          {content.objectives.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="details-section" aria-labelledby="learn-heading">
        <h2 id="learn-heading">{t.details.whatYouWillLearn}</h2>
        <ul>
          {content.whatYouWillLearn.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="details-section" aria-labelledby="curriculum-heading">
        <h2 id="curriculum-heading">{t.details.curriculum}</h2>
        {content.curriculum.map((unit) => (
          <div key={unit.unit} className="curriculum-unit">
            <h3>{unit.unit}</h3>
            <ul>
              {unit.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="details-section" aria-labelledby="method-heading">
        <h2 id="method-heading">{t.details.teachingMethod}</h2>
        <p>{content.teachingMethod}</p>
      </section>

      {content.notes ? (
        <section className="details-section" aria-labelledby="notes-heading">
          <h2 id="notes-heading">{t.details.notes}</h2>
          <p>{content.notes}</p>
        </section>
      ) : null}

      <a
        href={getWhatsAppLink(content.whatsappMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary details-cta"
      >
        {t.details.applyNow}
      </a>
    </article>
  );
}
