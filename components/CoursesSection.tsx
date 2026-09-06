'use client';

import { useLanguage } from '@/context/LanguageContext';
import { courses } from '@/data/courses';
import CourseCard from './CourseCard';

export default function CoursesSection() {
  const { t } = useLanguage();

  return (
    <section id="courses" className="courses-section" aria-labelledby="courses-title">
      <h2 id="courses-title" className="courses-title">
        {t.courses.sectionTitle}
      </h2>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} badgeVariant={index === 1 ? 'gold' : 'default'} />
        ))}
      </div>
    </section>
  );
}
