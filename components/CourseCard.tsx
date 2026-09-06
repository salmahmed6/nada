'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { Course } from '@/data/courses';
import { getWhatsAppLink } from '@/lib/whatsapp';

type Props = {
  course: Course;
  badgeVariant?: 'default' | 'gold';
};

export default function CourseCard({ course, badgeVariant = 'default' }: Props) {
  const { locale, t } = useLanguage();
  const content = course[locale];
  const scheduleDays = content.schedule.days.join(locale === 'ar' ? '، ' : ', ');

  return (
    <article className="course-card">
      <span className={`badge${badgeVariant === 'gold' ? ' badge-gold' : ''}`}>{content.grade}</span>
      <h3 className="course-name">{content.title}</h3>
      <p className="course-desc">{content.shortDescription}</p>
      <p className="course-meta">
        {content.duration} · {scheduleDays} · {content.schedule.time}
      </p>
      <div className="course-actions">
        <Link href={`/courses/${course.id}`} className="course-btn">
          {t.courses.viewDetails}
        </Link>
        <a
          href={getWhatsAppLink(content.whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="course-apply-btn"
        >
          {t.courses.applyNow}
        </a>
      </div>
    </article>
  );
}
