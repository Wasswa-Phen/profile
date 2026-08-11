export interface TimelineItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface CoreValue {
  id: string;
  title: string;
  description: string;
  iconName: 'heart' | 'shield-check' | 'users' | 'trending-up' | 'book-open';
}

export const timelineData: TimelineItem[] = [
  {
    period: '2026 - PRESENT',
    role: 'Class Coordinator',
    organization: 'Victoria University Kampala (IATS)',
    description: 'Representing student interests to faculty management. Coordinating academic communications, study groups, and technical peer collaboration across the Software Engineering cohort.'
  },
  {
    period: '2025 - PRESENT',
    role: 'R&D Lead / Team Lead',
    organization: 'Aromax Technologies Uganda',
    description: 'Directing technical innovation, digital product strategy, and user interface architectures. Coordinating development teams to deliver corporate web solutions and platform redesigns.'
  },
  {
    period: '2024 - PRESENT',
    role: 'Production Manager & Media Leader',
    organization: 'Kasenge Miracle Centre Church',
    description: 'Leading media production, livestream operations, and digital communication initiatives. Managing Behringer X32 audio consoles, OBS Studio streaming setups, and overseeing media, music, and youth ministry technology systems.'
  }
];

export const coreValuesData: CoreValue[] = [
  {
    id: 'faith-kingdom-first',
    title: 'Faith & Kingdom First',
    description: 'Aligning every project and ambition with God\'s Word and Kingdom principles. Guiding every decision and interaction with foundational spiritual values.',
    iconName: 'heart'
  },
  {
    id: 'excellence-as-worship',
    title: 'Excellence as Worship',
    description: 'Treating every design, code commit, and production assignment as an act of service to God. Pursuing the highest standards in code quality, design, and execution.',
    iconName: 'shield-check'
  },
  {
    id: 'servant-leadership',
    title: 'Servant Leadership',
    description: 'Leading by enabling, equipping, and mentoring others. Empowering teams, coordinating effectively, and prioritizing the success of the collective over the individual.',
    iconName: 'users'
  },
  {
    id: 'integrity-accountability',
    title: 'Integrity & Accountability',
    description: 'Maintaining honesty and transparency in business, team dynamics, and ministry. Operating with disciplined execution and continuous learning.',
    iconName: 'shield-check'
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'Remaining teachable and committed to growing technical and personal capacity daily. Adapting to new technologies, refining skills, and evolving professionally.',
    iconName: 'trending-up'
  }
];

export interface Education {
  institution: string;
  program: string;
  role?: string;
  timeline: string;
}

export const educationData: Education[] = [
  {
    institution: 'Victoria University Kampala (IATS)',
    program: 'Professional Certificate in Software Engineering (PCSE)',
    role: 'Class Coordinator (Cohort 1.1)',
    timeline: 'March 2026 – Present'
  },
  {
    institution: 'Kisozi High School',
    program: 'Uganda Certificate of Education (UCE / Senior Four)',
    timeline: '2020'
  }
];
