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
        {
          unit: 'الاتصال وأشكاله',
          lessons: [
            'الإنترنت والاتصالات',
            'الاتصال عبر الإنترنت',
            'خصائص التواصل على الإنترنت',
          ],
        },
        {
          unit: 'تصميم المعلومات',
          lessons: [
            'التناظرية والرقمية',
            'النظام الثنائي وكمية البيانات',
            'Bits & Bytes',
            'نظام العد العشري ونظام العد الثنائي',
            'النظام السادس عشر (Hexadecimal)',
            'النظام السادس عشر',
            'التحويل بين النظام العشري، والنظام الثنائي، والنظام السادس عشر',
            'التمثيل الرقمي للأحرف',
            'التمثيل الرقمي للأحرف',
            'العمليات الحسابية العددية [1]',
            'جمع وطرح الأرقام الثنائية',
            'العمليات الحسابية العددية [2]',
            'تمثيل الأرقام السالبة باستخدام المتممات',
            'الطرح باستخدام المكملات',
            'رقمنة الصوت',
            'الصوت',
            'رقمنة الصوت',
            'كمية بيانات الصوت',
            'رقمنة الصور',
            'رقمنة الصور',
            'تمثيل اللون',
            'التمثيل الرقمي وضغط الفيديو',
            'آلية الفيديو',
            'ضغط البيانات',
            'الأنواع الرئيسية للضغط بدون فقدان',
            'تصميم البيانات',
            'تصميم البيانات',
            'تقنيات التصميم لسهولة الفهم',
          ],
        },
        {
          unit: 'الكمبيوترات',
          lessons: [
            'بنية الكمبيوتر',
            'المكونات الخمسة الرئيسية للحاسوب',
            'برامج الكمبيوتر',
            'الأجهزة والبرمجيات',
            'الدوائر المنطقية',
            'الدوائر المنطقية',
            'دائرة الجمع النصفي ودائرة الجمع الكامل',
          ],
        },
        {
          unit: 'الشبكات',
          lessons: [
            'شبكات الكمبيوتر',
            'شبكات المعلومات والاتصالات',
            'أنماط استخدام الشبكة',
            'طرق الاتصال',
            'عناوين IP وأسماء النطاقات',
            'عناوين IP وأسماء النطاقات',
            'بروتوكول الاتصال',
            'بروتوكول الاتصال',
            'آلية الاتصال في TCP/IP',
            'آلية عمل صفحات الويب والبريد الإلكتروني',
            'آلية الإنترنت',
            'آلية البريد الإلكتروني',
          ],
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
        {
          unit: 'Communication and Its Forms',
          lessons: [
            'Internet and Communications',
            'Communication over the Internet',
            'Characteristics of Online Communication',
          ],
        },
        {
          unit: 'Information Design',
          lessons: [
            'Analog and Digital',
            'Binary System and Amount of Data',
            'Bits & Bytes',
            'Decimal Number System and Binary Number System',
            'Hexadecimal Number System',
            'The Hexadecimal System',
            'Conversion between Decimal, Binary, and Hexadecimal Systems',
            'Digital Representation of Characters',
            'Digital Representation of Characters',
            'Numerical Arithmetic Operations [1]',
            'Adding and Subtracting Binary Numbers',
            'Numerical Arithmetic Operations [2]',
            'Representing Negative Numbers Using Complements',
            'Subtraction Using Complements',
            'Sound Digitization',
            'Sound',
            'Sound Digitization',
            'Amount of Sound Data',
            'Image Digitization',
            'Image Digitization',
            'Color Representation',
            'Digital Representation and Video Compression',
            'Video Mechanism',
            'Data Compression',
            'Main Types of Lossless Compression',
            'Data Design',
            'Data Design',
            'Design Techniques for Ease of Understanding',
          ],
        },
        {
          unit: 'Computers',
          lessons: [
            'Computer Architecture',
            'The Five Main Components of a Computer',
            'Computer Programs',
            'Hardware and Software',
            'Logic Circuits',
            'Logic Circuits',
            'Half Adder and Full Adder Circuits',
          ],
        },
        {
          unit: 'Networks',
          lessons: [
            'Computer Networks',
            'Information and Communication Networks',
            'Patterns of Network Use',
            'Communication Methods',
            'IP Addresses and Domain Names',
            'IP Addresses and Domain Names',
            'Communication Protocol',
            'Communication Protocol',
            'Communication Mechanism in TCP/IP',
            'How Web Pages and Email Work',
            'How the Internet Works',
            'How Email Works',
          ],
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
      shortDescription: 'المحتوى الدراسي للصف الثاني الثانوي في البرمجة والذكاء الاصطناعي، وفق الوحدات والدروس الموضحة في المنهج.',
      description: 'مسار دراسي لطلاب الصف الثاني الثانوي يغطي موضوعات تكنولوجيا المعلومات والذكاء الاصطناعي، الأمن السيبراني، تطبيقات الويب، وتصميم الويب والوسائط.',
      objectives: [
        'فهم تطور تكنولوجيا المعلومات وتأثيرها على المجتمع',
        'التعرف على أساسيات الذكاء الاصطناعي واستخداماته وأخلاقياته',
        'فهم أساسيات الأمن السيبراني والمصادقة والاستجابة للحوادث',
        'التعرف على بنية تطبيقات الويب وطرق الاتصال وتقنيات الواجهة الأمامية',
        'فهم مبادئ تصميم الويب والوسائط وتجربة المستخدم وتقييم المواقع',
      ],
      whatYouWillLearn: [
        'تطور تكنولوجيا المعلومات والتحول الاجتماعي',
        'كيف يعمل الذكاء الاصطناعي وتطبيقاته في الحياة اليومية والصناعة',
        'التقنيات التشفيرية والمصادقة وتصميم أمن الشبكات',
        'بنية تطبيقات الويب وطرق الاتصال وأساسيات تقنيات الواجهة الأمامية',
        'أنواع الوسائط وتصميم المعلومات وتجربة المستخدم وتقييم المواقع',
      ],
      curriculum: [
        {
          unit: 'تكنولوجيا المعلومات والمجتمع',
          lessons: [
            'تطور تكنولوجيا المعلومات والتحول الاجتماعي',
            'كيف يعمل الذكاء الاصطناعي',
            'الذكاء الاصطناعي في الحياة اليومية والصناعة',
            'القضايا الأخلاقية المتعلقة بالذكاء الاصطناعي',
          ],
        },
        {
          unit: 'الأمن السيبراني',
          lessons: [
            'التقنيات التشفيرية والمصادقة',
            'تصميم أمن الشبكات',
            'الاستجابة للحوادث وإدارة المخاطر',
          ],
        },
        {
          unit: 'تطبيقات الويب',
          lessons: [
            'البنية العامة لتطبيقات الويب',
            'طرق الاتصال في تطبيقات الويب',
            'أساسيات تقنيات الواجهة الأمامية',
          ],
        },
        {
          unit: 'تصميم الويب والوسائط',
          lessons: [
            'أنواع الوسائط وخصائصها',
            'تصميم المعلومات وتجربة المستخدم للمواقع',
            'طرق تقييم المواقع',
            'عملية التحسين التكراري للمواقع',
          ],
        },
      ],
      teachingMethod: 'شرح مبسط ومنظم مع التركيز على فهم المفاهيم وربطها بالتطبيقات العملية.',
      notes: 'المحتوى المضاف يعكس الوحدات والدروس الظاهرة في المنهج المرفق.',
      whatsappMessage: 'السلام عليكم، أريد الاستفسار عن مسار بكالوريا الصف الثاني الثانوي في البرمجة والذكاء الاصطناعي.',
    },
    en: {
      title: 'Second Secondary Baccalaureate — Programming & Artificial Intelligence',
      grade: 'Second Secondary',
      subject: 'Programming & Artificial Intelligence',
      shortDescription: 'The Second Secondary Programming & AI curriculum, organized around the units and lessons shown in the provided course contents.',
      description: 'A course path for Second Secondary students covering information technology and AI, cybersecurity, web applications, and web and media design.',
      objectives: [
        'Understand the development of information technology and its impact on society',
        'Learn how AI works, its applications, and its ethical issues',
        'Understand cybersecurity fundamentals, authentication, and incident response',
        'Learn the overall structure of web applications, communication methods, and frontend fundamentals',
        'Understand web and media design, user experience, and website evaluation',
      ],
      whatYouWillLearn: [
        'Development of information technology and social transformation',
        'How AI works and its applications in daily life and industry',
        'Cryptographic technologies, authentication, and network security design',
        'Web application structure, communication methods, and frontend fundamentals',
        'Media types, information design, user experience, and website evaluation',
      ],
      curriculum: [
        {
          unit: 'Information Technology and Society',
          lessons: [
            'Development of Information Technology and Social Transformation',
            'How AI Works',
            'AI in Daily Life and Industry',
            'Ethical Issues with AI',
          ],
        },
        {
          unit: 'Cybersecurity',
          lessons: [
            'Cryptographic Technologies and Authentication',
            'Network Security Design',
            'Incident Response and Risk Management',
          ],
        },
        {
          unit: 'Web Applications',
          lessons: [
            'The Overall Structure of Web Applications',
            'Web Application Communication Methods',
            'Fundamentals of Frontend Technology',
          ],
        },
        {
          unit: 'Web and Media Design',
          lessons: [
            'Types and Characteristics of Media',
            'Information Design and User Experience for Websites',
            'Methods for Evaluating Websites',
            'The Iterative Improvement Process for Websites',
          ],
        },
      ],
      teachingMethod: 'Clear, structured explanations focused on understanding the concepts and connecting them to practical applications.',
      notes: 'The added curriculum reflects the units and lessons shown in the provided course contents.',
      whatsappMessage: 'Hello, I would like to ask about the Second Secondary Programming & Artificial Intelligence learning path.',
    },
  },
];

export function getCourseById(id: string): Course | undefined {
  return courses.find((course) => course.id === id);
}
