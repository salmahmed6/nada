export type InstructorContent = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  education: string;
  graduation: string;
  highlights: string[];
  skills: string[];
};

export const instructor: Record<'ar' | 'en', InstructorContent> = {
  ar: {
    name: 'ندى أحمد عطيه ',
    role: 'مهندسة ذكاء اصطناعي | AI Engineer',
    bio: 'مهندسة ذكاء اصطناعي حاصلة على بكالوريوس الذكاء الاصطناعي بتخصص الروبوتات، ولديها أساس قوي في البرمجة والذكاء الاصطناعي وتطبيقاتهما العملية.',
    initials: 'ن.أ',
    education: 'بكالوريوس الذكاء الاصطناعي – تخصص الروبوتات، الأكاديمية العربية للعلوم والتكنولوجيا والنقل البحري',
    graduation: 'تخرجت في يوليو 2024 ',
    highlights: [
      'دورة Java Development من ITI',
      'دورة AWS Cloud Infrastructure',
      'المشاركة في مسابقة ECPC عامي 2022 و2023',
      'المشاركة في RoboCup Junior عام 2022',
    ],
    skills: ['Python', 'Java', 'C++', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
  },
  en: {
    name: 'Nada Ahmed Attia ',
    role: 'AI Engineer',
    bio: 'AI Engineer with a Bachelor’s degree in Artificial Intelligence, Robotics major, with a strong foundation in programming, artificial intelligence, and practical AI applications.',
    initials: 'NA',
    education: 'B.Sc. in Artificial Intelligence, Robotics Major – Arab Academy for Science, Technology and Maritime Transport',
    graduation: 'Graduated July 2024',
    highlights: [
      'Java Development Course – ITI',
      'AWS Cloud Infrastructure Course',
      'ECPC Competition participant in 2022 and 2023',
      'RoboCup Junior Competition participant in 2022',
    ],
    skills: ['Python', 'Java', 'C++', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
  },
};
