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
    duration: string;
    schedule: string;
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
    nav: {
      switchTo: 'English',
    },
    hero: {
      title: 'طريقك للتفوق يبدأ من هنا',
      subtitle: 'شرح مبسط، متابعة مستمرة، وخطة تعليمية تساعدك على تحقيق أفضل نتيجة.',
      cta: 'استعرض الكورسات',
    },
    instructor: {
      whatsapp: 'تواصل عبر واتساب',
      inquiryMessage: 'السلام عليكم، أريد الاستفسار عن الكورسات المتاحة.',
    },
    courses: {
      sectionTitle: 'الكورسات المتاحة',
      viewDetails: 'عرض تفاصيل الكورس',
      applyNow: 'احجز الآن',
      grade: 'الصف الدراسي',
      duration: 'مدة الكورس',
      schedule: 'مواعيد الحصص',
    },
    details: {
      back: 'العودة إلى الكورسات',
      objectives: 'أهداف الكورس',
      whatYouWillLearn: 'ماذا ستتعلم',
      curriculum: 'محتوى الكورس',
      teachingMethod: 'طريقة الشرح',
      notes: 'ملاحظات إضافية',
      applyNow: 'احجز الآن عبر واتساب',
      notFoundTitle: 'الكورس غير موجود',
      notFoundBody: 'عذرًا، لا يمكن العثور على تفاصيل هذا الكورس.',
    },
    footer: {
      cta: 'هل عندك سؤال عن الكورسات؟',
      button: 'تواصل عبر واتساب',
    },
  },
  en: {
    nav: {
      switchTo: 'العربية',
    },
    hero: {
      title: 'Your path to excelling in math starts here',
      subtitle:
        'Clear explanations, steady follow-up, and a study plan built to get you the results you want.',
      cta: 'Browse Courses',
    },
    instructor: {
      whatsapp: 'Message on WhatsApp',
      inquiryMessage: 'Hello, I would like to ask about the available courses.',
    },
    courses: {
      sectionTitle: 'Available Courses',
      viewDetails: 'View Course Details',
      applyNow: 'Apply Now',
      grade: 'Grade',
      duration: 'Duration',
      schedule: 'Class Schedule',
    },
    details: {
      back: 'Back to Courses',
      objectives: 'Course Objectives',
      whatYouWillLearn: 'What You Will Learn',
      curriculum: 'Course Curriculum',
      teachingMethod: 'Teaching Method',
      notes: 'Additional Notes',
      applyNow: 'Apply Now via WhatsApp',
      notFoundTitle: 'Course Not Found',
      notFoundBody: "Sorry, we couldn't find details for this course.",
    },
    footer: {
      cta: 'Have a question about the courses?',
      button: 'Message on WhatsApp',
    },
  },
};
