export interface Project {
  id: string;
  title: string;
  category: 'Web Platforms' | 'Church & Media' | 'Enterprise';
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  fullCaseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    keyResults: string[];
  };
}

export const projectsData: Project[] = [
  {
    id: 'tnt-nursery-school',
    title: 'T&T Nursery & Junior School',
    category: 'Web Platforms',
    description: 'Complete front-end development for T&T Nursery & Junior School in Kasenge — building a modern, responsive website now live and serving the school community.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    image: '/images/t and t landing page.png',
    liveUrl: 'https://tandtjuniorschool.com/',
    githubUrl: 'https://github.com/Wasswa-Phen',
    featured: true,
    fullCaseStudy: {
      overview: 'T&T Nursery & Junior School needed a professional, mobile-friendly website to showcase their academic programs, admissions process, and school community to prospective parents in Kasenge and the greater Kampala region.',
      challenge: 'The school had no previous digital presence. The site needed to work reliably on low-bandwidth mobile connections common in Uganda, load fast, and clearly communicate the school\'s values and enrollment information.',
      solution: 'Designed and built the entire front-end — a lightweight, fully responsive website with optimized assets, semantic HTML, and a clean visual hierarchy. Implemented mobile-first responsive design to ensure seamless browsing across all devices.',
      keyResults: [
        'Delivered the complete front-end for a live, production school website (tandtjuniorschool.com).',
        'Achieved fast load times optimized for mobile networks across Uganda.',
        'Established the school\'s first professional digital presence online.'
      ]
    }
  },
  {
    id: 'kmc-church-platform',
    title: 'Kasenge Miracle Centre Church Platform',
    category: 'Church & Media',
    description: 'Custom digital platform and media hub for Kasenge Miracle Centre Church — powering church communications, livestream integration, and community engagement.',
    technologies: ['React', 'CSS3', 'OBS Studio', 'Media Systems'],
    image: '/images/kmc_church.png',
    liveUrl: 'https://stephen-wasswa.github.io/church-website/',
    githubUrl: 'https://github.com/Wasswa-Phen',
    featured: true,
    fullCaseStudy: {
      overview: 'Kasenge Miracle Centre Church required a unified digital platform to manage church communications, integrate livestreaming, share sermons, and engage the congregation beyond Sunday services.',
      challenge: 'Coordinating media production workflows across livestreaming (OBS Studio), audio engineering (Behringer X32), and digital communication while maintaining a cohesive brand and user experience for the congregation.',
      solution: 'Built a custom digital platform integrating livestream embeds, sermon archives, event announcements, and ministry information. Established end-to-end media production pipelines from audio capture to live broadcast.',
      keyResults: [
        'Unified church communications into a single digital hub.',
        'Enabled reliable livestreaming for services reaching remote members.',
        'Streamlined media production workflows across audio and video systems.'
      ]
    }
  },
  {
    id: 'aromax-technologies',
    title: 'Aromax Technologies Uganda',
    category: 'Enterprise',
    description: 'Corporate website redesign, front-end architecture overhaul, and complete brand refresh for Aromax Technologies — delivering a modern enterprise digital identity.',
    technologies: ['React', 'Vite', 'TypeScript', 'UI/UX Design'],
    image: '/images/aromax_coming_soon.png',
    githubUrl: 'https://github.com/Wasswa-Phen',
    featured: true,
    fullCaseStudy: {
      overview: 'Aromax Technologies Uganda needed a complete corporate web presence overhaul to reflect their growing portfolio of digital products and services across the East African market.',
      challenge: 'The existing website lacked modern design standards, had poor mobile responsiveness, and did not effectively communicate the company\'s technical capabilities and service offerings.',
      solution: 'Led a complete front-end architecture redesign using React and Vite, established a scalable component library, implemented modern UI/UX patterns, and coordinated the development team through the full delivery lifecycle.',
      keyResults: [
        'Delivered a modern, responsive corporate website from the ground up.',
        'Established reusable component architecture for future product pages.',
        'Improved brand perception and digital credibility for enterprise clients.'
      ]
    }
  }
];
