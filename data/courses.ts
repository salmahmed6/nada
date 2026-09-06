export type CourseContent = {
  title: string;
  grade: string;
  subject: string;
  shortDescription: string;
  description: string;
  objectives: string[];
  whatYouWillLearn: string[];
  curriculum: { unit: string; lessons: string[] }[];
  schedule: { days: string[]; time: string };
  duration: string;
  teachingMethod: string;
  notes?: string;
  whatsappMessage: string;
};

export type Course = {
  id: string;
  ar: CourseContent;
  en: CourseContent;
};

/**
 * Mock course data. Replace with the instructor's real course details later.
 * Nothing in the UI components is hardcoded to a specific course — add or
 * edit entries here and the site (cards, details page, WhatsApp messages)
 * updates automatically.
 */
export const courses: Course[] = [
  {
    id: 'grade-10-math',
    ar: {
      title: 'كورس الرياضيات - أولى ثانوي',
      grade: 'أولى ثانوي',
      subject: 'الرياضيات',
      shortDescription:
        'شرح شامل لمنهج أولى ثانوي بطريقة مبسطة ومنظمة مع تدريبات ومراجعات دورية.',
      description:
        'كورس متكامل يغطي منهج الرياضيات لطلاب أولى ثانوي، يعتمد على الشرح المبسط والتطبيق العملي على أنماط الأسئلة المختلفة، مع متابعة مستمرة لمستوى كل طالب لضمان الفهم الكامل قبل الانتقال إلى أي جزء جديد.',
      objectives: [
        'إتقان أساسيات المنهج بشكل كامل',
        'تنمية مهارة حل المسائل والتفكير الرياضي',
        'الاستعداد الجيد للامتحانات الشهرية والفصلية',
      ],
      whatYouWillLearn: [
        'حل المعادلات والمتباينات بأنواعها',
        'أساسيات الهندسة التحليلية',
        'التعامل مع الدوال ورسمها',
      ],
      curriculum: [
        {
          unit: 'الوحدة الأولى: الجبر',
          lessons: ['المعادلات من الدرجة الأولى', 'المعادلات من الدرجة الثانية', 'المتباينات'],
        },
        {
          unit: 'الوحدة الثانية: الهندسة',
          lessons: ['الإحداثيات والمستقيم', 'الدائرة', 'تطبيقات هندسية'],
        },
      ],
      schedule: { days: ['السبت', 'الإثنين', 'الأربعاء'], time: '6:00 مساءً' },
      duration: '12 أسبوع',
      teachingMethod:
        'حصص أونلاين مباشرة مع تسجيل الحصة، بالإضافة إلى مجموعة واجبات وتدريبات أسبوعية.',
      notes: 'يتم توفير ملازم الكورس بصيغة PDF لكل طالب مسجل.',
      whatsappMessage: 'السلام عليكم، أريد التقديم في كورس أولى ثانوي.',
    },
    en: {
      title: 'Math Course - Grade 10',
      grade: 'Grade 10',
      subject: 'Mathematics',
      shortDescription:
        'A complete walkthrough of the Grade 10 curriculum with clear explanations, practice sets, and regular reviews.',
      description:
        "A complete course covering the Grade 10 math curriculum, built on clear explanations and hands-on practice with different question styles, with ongoing follow-up on each student's level to make sure every topic is fully understood before moving on.",
      objectives: [
        'Fully master the fundamentals of the curriculum',
        'Build strong problem-solving and mathematical reasoning skills',
        'Prepare well for monthly and term exams',
      ],
      whatYouWillLearn: [
        'Solving equations and inequalities of different types',
        'Fundamentals of analytic geometry',
        'Working with functions and graphing them',
      ],
      curriculum: [
        {
          unit: 'Unit 1: Algebra',
          lessons: ['First-degree equations', 'Second-degree equations', 'Inequalities'],
        },
        {
          unit: 'Unit 2: Geometry',
          lessons: ['Coordinates and the straight line', 'The circle', 'Geometric applications'],
        },
      ],
      schedule: { days: ['Saturday', 'Monday', 'Wednesday'], time: '6:00 PM' },
      duration: '12 weeks',
      teachingMethod:
        'Live online sessions with recordings provided, plus weekly homework and practice sets.',
      notes: 'Course notes are provided as a PDF to every enrolled student.',
      whatsappMessage: 'Hello, I would like to apply for the Grade 10 math course.',
    },
  },
  {
    id: 'grade-11-math',
    ar: {
      title: 'كورس الرياضيات - تانية ثانوي',
      grade: 'تانية ثانوي',
      subject: 'الرياضيات',
      shortDescription:
        'برنامج منظم لفهم منهج تانية ثانوي والتدرب على أنماط الأسئلة المختلفة.',
      description:
        'كورس مخصص لطلاب تانية ثانوي يركز على بناء أساس قوي في الجبر وحساب المثلثات، مع تدريبات مكثفة على الأسئلة التي تتكرر في الامتحانات، ومتابعة دورية لتقييم مستوى الطالب.',
      objectives: [
        'فهم عميق لموضوعات حساب المثلثات والجبر',
        'القدرة على حل المسائل المركبة خطوة بخطوة',
        'رفع مستوى الثقة قبل دخول الامتحانات',
      ],
      whatYouWillLearn: ['العلاقات والدوال المثلثية', 'المتتابعات والمتسلسلات', 'التفاضل التمهيدي'],
      curriculum: [
        {
          unit: 'الوحدة الأولى: حساب المثلثات',
          lessons: ['القياس الدائري', 'الدوال المثلثية', 'حل المثلثات'],
        },
        {
          unit: 'الوحدة الثانية: الجبر',
          lessons: ['المتتابعات', 'المتسلسلات', 'تطبيقات عامة'],
        },
      ],
      schedule: { days: ['الأحد', 'الثلاثاء', 'الخميس'], time: '7:00 مساءً' },
      duration: '12 أسبوع',
      teachingMethod:
        'حصص أونلاين مباشرة مع تسجيل الحصة، بالإضافة إلى مجموعة واجبات وتدريبات أسبوعية.',
      notes: 'مراجعات نهائية مكثفة قبل كل امتحان.',
      whatsappMessage: 'السلام عليكم، أريد التقديم في كورس تانية ثانوي.',
    },
    en: {
      title: 'Math Course - Grade 11',
      grade: 'Grade 11',
      subject: 'Mathematics',
      shortDescription:
        'A structured program to master the Grade 11 curriculum and practice different question styles.',
      description:
        "A dedicated course for Grade 11 students focused on building a strong foundation in algebra and trigonometry, with intensive practice on frequently recurring exam questions and regular check-ins on each student's progress.",
      objectives: [
        'Deep understanding of trigonometry and algebra topics',
        'Ability to solve compound problems step by step',
        'Build confidence ahead of exams',
      ],
      whatYouWillLearn: ['Trigonometric relations and functions', 'Sequences and series', 'Introductory calculus'],
      curriculum: [
        {
          unit: 'Unit 1: Trigonometry',
          lessons: ['Radian measure', 'Trigonometric functions', 'Solving triangles'],
        },
        {
          unit: 'Unit 2: Algebra',
          lessons: ['Sequences', 'Series', 'General applications'],
        },
      ],
      schedule: { days: ['Sunday', 'Tuesday', 'Thursday'], time: '7:00 PM' },
      duration: '12 weeks',
      teachingMethod:
        'Live online sessions with recordings provided, plus weekly homework and practice sets.',
      notes: 'Intensive final review sessions before every exam.',
      whatsappMessage: 'Hello, I would like to apply for the Grade 11 math course.',
    },
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
