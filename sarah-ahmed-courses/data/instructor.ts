export type InstructorContent = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

/**
 * Replace bio copy and add a real photo (see components/InstructorSection.tsx)
 * once the instructor provides them. No claims or stats are invented here.
 */
export const instructor: Record<'ar' | 'en', InstructorContent> = {
  ar: {
    name: 'أ. سارة أحمد',
    role: 'مدرّسة رياضيات',
    bio: 'مدرّسة رياضيات متخصصة في المرحلة الثانوية، تعتمد على أسلوب شرح مبسط ومتابعة فردية لكل طالب لضمان الفهم الكامل للمنهج.',
    initials: 'س.أ',
  },
  en: {
    name: 'Ms. Sarah Ahmed',
    role: 'Math Teacher',
    bio: 'A high school math teacher who focuses on clear, simplified explanations and individual follow-up with every student to make sure the curriculum is fully understood.',
    initials: 'SA',
  },
};
