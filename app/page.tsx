import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import InstructorSection from '@/components/InstructorSection';
import CoursesSection from '@/components/CoursesSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="page">
      <Nav />
      <main>
        <Hero />
        <InstructorSection />
        <CoursesSection />
      </main>
      <Footer />
    </div>
  );
}
