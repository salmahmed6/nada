export type Locale = 'ar' | 'en';

export type Dictionary = {
  nav: { switchTo: string };
  hero: { title: string; subtitle: string; cta: string };
  instructor: { whatsapp: string; inquiryMessage: string };
  courses: {
    sectionTitle: string;
    viewDetails: string;
    applyNow: string;
    grade: string;
    subject: string;
  };
  details: {
    back: string;
    objectives: string;
    whatYouWillLearn: string;
    curriculum: string;
    teachingMethod: string;
    notes: string;
    applyNow: string;
    notFoundTitle: string;
    notFoundBody: string;
  };
  footer: { cta: string; button: string };
};

export const translations: Record<Locale, Dictionary> = {
  ar: {
    nav: { switchTo: 'English' },
    hero: {
      title: 'البرمجة والذكاء الاصطناعي تبدأ بخطوة صحيحة',
      subtitle: 'شرح مبسط وتطبيق عملي لطلاب المرحلة الثانوية، مع مسارات مخصصة للصفين الأول والثاني الثانوي.',
      cta: 'استعرض الكورسات',
    },
    instructor: {
      whatsapp: 'تواصل عبر واتساب',
      inquiryMessage: 'السلام عليكم، أريد الاستفسار عن الكورسات المتاحة.',
    },
    courses: {
      sectionTitle: 'الكورسات المتاحة',
      viewDetails: 'عرض تفاصيل الكورس',
      applyNow: 'استفسر الآن',
      grade: 'الصف الدراسي',
      subject: 'المادة',
    },
    details: {
      back: 'العودة إلى الكورسات',
      objectives: 'أهداف الكورس',
      whatYouWillLearn: 'ماذا ستتعلم',
      curriculum: 'محتوى الكورس',
      teachingMethod: 'طريقة الشرح',
      notes: 'ملاحظات إضافية',
      applyNow: 'استفسر عبر واتساب',
      notFoundTitle: 'الكورس غير موجود',
      notFoundBody: 'عذرًا، لا يمكن العثور على تفاصيل هذا الكورس.',
    },
    footer: {
      cta: 'هل عندك سؤال عن الكورسات؟',
      button: 'تواصل عبر واتساب',
    },
  },
  en: {
    nav: { switchTo: 'العربية' },
    hero: {
      title: 'Start Your Programming & AI Journey the Right Way',
      subtitle: 'Clear explanations and practical learning for secondary students, with dedicated paths for First and Second Secondary.',
      cta: 'Browse Courses',
    },
    instructor: {
      whatsapp: 'Message on WhatsApp',
      inquiryMessage: 'Hello, I would like to ask about the available courses.',
    },
    courses: {
      sectionTitle: 'Available Courses',
      viewDetails: 'View Course Details',
      applyNow: 'Ask About the Course',
      grade: 'Grade',
      subject: 'Subject',
    },
    details: {
      back: 'Back to Courses',
      objectives: 'Course Objectives',
      whatYouWillLearn: 'What You Will Learn',
      curriculum: 'Course Curriculum',
      teachingMethod: 'Teaching Method',
      notes: 'Additional Notes',
      applyNow: 'Ask via WhatsApp',
      notFoundTitle: 'Course Not Found',
      notFoundBody: "Sorry, we couldn't find details for this course.",
    },
    footer: {
      cta: 'Have a question about the courses?',
      button: 'Message on WhatsApp',
    },
  },
};
