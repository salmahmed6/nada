export type CourseContent = {
  title: string;
  grade: string;
  subject: string;
  shortDescription: string;
  description: string;
  objectives: string[];
  whatYouWillLearn: string[];
  curriculum: { unit: string; lessons: string[] }[];
  teachingMethod: string;
  notes?: string;
  whatsappMessage: string;
};

export type Course = {
  id: string;
  ar: CourseContent;
  en: CourseContent;
};

export const courses: Course[] = [
  {
    id: 'first-secondary-programming-ai',
    ar: {
      title: 'بكالوريا الصف الأول الثانوي — البرمجة والذكاء الاصطناعي',
      grade: 'بكالوريا الصف الأول الثانوي',
      subject: 'البرمجة والذكاء الاصطناعي',
      shortDescription: 'مسار دراسي لفهم البرمجة والذكاء الاصطناعي بصورة عملية ومنظمة، مع التركيز على بناء أساس قوي للتعلم والتطبيق.',
      description: 'كورس مخصص لطلاب الصف الأول الثانوي في مادة البرمجة والذكاء الاصطناعي، مع شرح مبسط للمفاهيم البرمجية والتفكير الحاسوبي وربطها بتطبيقات الذكاء الاصطناعي. تم تنظيم صفحة الكورس بما يتوافق مع وجود مادة البرمجة والذكاء الاصطناعي ضمن إطار الصف الأول الثانوي في النظام الدراسي الحالي.',
      objectives: [
        'بناء أساس قوي في التفكير الحاسوبي والبرمجة',
        'فهم المفاهيم الأساسية للذكاء الاصطناعي وتطبيقاته',
        'التدرب على تحويل المشكلات إلى خطوات وحلول قابلة للتنفيذ',
      ],
      whatYouWillLearn: [
        'أساسيات البرمجة وكتابة الحلول بطريقة منظمة',
        'الخوارزميات والتفكير المنطقي وحل المشكلات',
        'مقدمة عملية إلى مفاهيم الذكاء الاصطناعي',
        'التعامل مع أمثلة وتطبيقات برمجية مرتبطة بالمادة',
      ],
      curriculum: [
        {
          unit: 'أساسيات البرمجة',
          lessons: ['مفاهيم البرمجة الأساسية', 'المتغيرات والبيانات', 'الشروط والتكرار', 'كتابة حلول منظمة'],
        },
        {
          unit: 'الخوارزميات وحل المشكلات',
          lessons: ['التفكير الحاسوبي', 'تصميم خطوات الحل', 'الخوارزميات وتقييم الحلول', 'تطبيقات عملية'],
        },
        {
          unit: 'مقدمة في الذكاء الاصطناعي',
          lessons: ['ما هو الذكاء الاصطناعي؟', 'أمثلة على تطبيقاته', 'التعامل مع البيانات كمقدمة للتطبيقات الذكية', 'أخلاقيات واستخدامات الذكاء الاصطناعي'],
        },
      ],
      teachingMethod: 'شرح مبسط مع تطبيق عملي وتدريبات تدريجية تساعد الطالب على فهم الفكرة ثم تنفيذها بنفسه.',
      notes: 'المواعيد والتفاصيل الخاصة بالحجز يتم تأكيدها مباشرة عبر واتساب.',
      whatsappMessage: 'السلام عليكم، أريد الاستفسار عن كورس بكالوريا الصف الأول الثانوي في البرمجة والذكاء الاصطناعي.',
    },
    en: {
      title: 'First Secondary Baccalaureate — Programming & Artificial Intelligence',
      grade: 'First Secondary',
      subject: 'Programming & Artificial Intelligence',
      shortDescription: 'A structured learning path for programming and AI, focused on building a practical foundation for learning and application.',
      description: 'A course for First Secondary students studying Programming and Artificial Intelligence, with clear explanations of programming concepts and computational thinking connected to practical AI applications. The course page reflects the current First Secondary framework in which Programming and AI is included as a subject.',
      objectives: [
        'Build a strong foundation in computational thinking and programming',
        'Understand core artificial intelligence concepts and applications',
        'Practice turning problems into structured, executable solutions',
      ],
      whatYouWillLearn: [
        'Programming fundamentals and structured solutions',
        'Algorithms, logical thinking, and problem solving',
        'A practical introduction to artificial intelligence',
        'Examples and programming applications related to the subject',
      ],
      curriculum: [
        {
          unit: 'Programming Fundamentals',
          lessons: ['Core programming concepts', 'Variables and data', 'Conditions and loops', 'Writing structured solutions'],
        },
        {
          unit: 'Algorithms & Problem Solving',
          lessons: ['Computational thinking', 'Designing solution steps', 'Algorithms and evaluating solutions', 'Practical applications'],
        },
        {
          unit: 'Introduction to Artificial Intelligence',
          lessons: ['What is AI?', 'Examples of AI applications', 'Working with data as a foundation for intelligent applications', 'AI ethics and responsible use'],
        },
      ],
      teachingMethod: 'Clear explanations followed by practical work and progressive exercises so students understand the idea and then implement it themselves.',
      notes: 'Current class dates and booking details are confirmed directly through WhatsApp.',
      whatsappMessage: 'Hello, I would like to ask about the First Secondary Programming & Artificial Intelligence course.',
    },
  },
  {
    id: 'second-secondary-programming-ai',
    ar: {
      title: 'بكالوريا الصف الثاني الثانوي — البرمجة والذكاء الاصطناعي',
      grade: 'بكالوريا الصف الثاني الثانوي',
      subject: 'البرمجة والذكاء الاصطناعي',
      shortDescription: 'مسار متقدم للطلاب الراغبين في استكمال بناء مهاراتهم في البرمجة والذكاء الاصطناعي مع تطبيقات عملية.',
      description: 'مسار تدريبي لطلاب الصف الثاني الثانوي يركز على استكمال مهارات البرمجة والتفكير الخوارزمي والتعرف بصورة أعمق على تطبيقات الذكاء الاصطناعي. تفاصيل الجدول والمحتوى النهائي للحصص يتم تأكيدها مع المدرّسة حسب الخطة الدراسية الفعلية.',
      objectives: [
        'تطوير مهارات البرمجة وحل المشكلات',
        'الانتقال من فهم المفاهيم إلى بناء تطبيقات أبسط',
        'توسيع الفهم العملي لمفاهيم الذكاء الاصطناعي',
      ],
      whatYouWillLearn: [
        'كتابة برامج أكثر تنظيمًا وقابلية للتطوير',
        'حل المشكلات باستخدام الخوارزميات',
        'فهم أعمق لفكرة البيانات والنماذج الذكية',
        'تطبيق المفاهيم من خلال تمارين ومشروعات صغيرة',
      ],
      curriculum: [
        {
          unit: 'تطوير مهارات البرمجة',
          lessons: ['تنظيم البرامج', 'الدوال وإعادة استخدام الكود', 'التعامل مع هياكل البيانات الأساسية', 'تطبيقات عملية'],
        },
        {
          unit: 'الخوارزميات والتطبيق العملي',
          lessons: ['تحليل المشكلة', 'اختيار الخوارزمية المناسبة', 'اختبار الحل وتحسينه', 'مشروعات تدريبية صغيرة'],
        },
        {
          unit: 'تطبيقات الذكاء الاصطناعي',
          lessons: ['مراجعة مفاهيم AI الأساسية', 'البيانات والنماذج', 'أمثلة على تطبيقات AI', 'مشروعات تطبيقية مبسطة'],
        },
      ],
      teachingMethod: 'شرح عملي قائم على حل المشكلات والتطبيق، مع تدريبات ومشروعات صغيرة لتثبيت المفاهيم.',
      notes: 'هذه الصفحة تعرض المسار التدريبي للصف الثاني؛ يتم تأكيد المواد والمواعيد النهائية مع المدرّسة قبل الحجز.',
      whatsappMessage: 'السلام عليكم، أريد الاستفسار عن مسار بكالوريا الصف الثاني الثانوي في البرمجة والذكاء الاصطناعي.',
    },
    en: {
      title: 'Second Secondary Baccalaureate — Programming & Artificial Intelligence',
      grade: 'Second Secondary',
      subject: 'Programming & Artificial Intelligence',
      shortDescription: 'An advanced learning path for students who want to continue developing programming and AI skills through practical work.',
      description: 'A training path for Second Secondary students focused on strengthening programming and algorithmic thinking while exploring AI applications in greater depth. The final lesson plan and schedule are confirmed with the instructor according to the actual study plan.',
      objectives: [
        'Strengthen programming and problem-solving skills',
        'Move from understanding concepts to building simple applications',
        'Develop a deeper practical understanding of AI concepts',
      ],
      whatYouWillLearn: [
        'Writing more structured and maintainable programs',
        'Problem solving with algorithms',
        'A deeper view of data and intelligent models',
        'Applying concepts through exercises and small projects',
      ],
      curriculum: [
        {
          unit: 'Programming Skills Development',
          lessons: ['Program organization', 'Functions and code reuse', 'Working with basic data structures', 'Practical applications'],
        },
        {
          unit: 'Algorithms & Practical Application',
          lessons: ['Problem analysis', 'Choosing suitable algorithms', 'Testing and improving solutions', 'Small training projects'],
        },
        {
          unit: 'AI Applications',
          lessons: ['Review of core AI concepts', 'Data and models', 'Examples of AI applications', 'Simple applied projects'],
        },
      ],
      teachingMethod: 'Practical, problem-based teaching with exercises and small projects to reinforce the concepts.',
      notes: 'This page presents the Second Secondary training path; the final content and schedule are confirmed with the instructor before booking.',
      whatsappMessage: 'Hello, I would like to ask about the Second Secondary Programming & Artificial Intelligence learning path.',
    },
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
