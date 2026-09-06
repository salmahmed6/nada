import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { courses, getCourseById } from '@/data/courses';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CourseDetailsClient from '@/components/CourseDetailsClient';

type Props = {
  params: { id: string };
};

export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export function generateMetadata({ params }: Props): Metadata {
  const course = getCourseById(params.id);
  if (!course) {
    return { title: 'الكورس غير موجود' };
  }

  return {
    title: `${course.ar.title} | أ. سارة أحمد`,
    description: course.ar.shortDescription,
    openGraph: {
      title: course.ar.title,
      description: course.ar.shortDescription,
      locale: 'ar_EG',
      type: 'website',
    },
  };
}

export default function CourseDetailsPage({ params }: Props) {
  const course = getCourseById(params.id);

  if (!course) {
    notFound();
  }

  return (
    <div className="page">
      <Nav />
      <main>
        <CourseDetailsClient course={course} />
      </main>
      <Footer />
    </div>
  );
}
