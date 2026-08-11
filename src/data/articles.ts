export interface Article {
  id: string;
  title: string;
  category: 'Front-End' | 'Media Engineering' | 'Kingdom Leadership';
  summary: string;
  date: string;
  image: string;
  featured?: boolean;
  readTime?: string;
}

export const articlesData: Article[] = [
  {
    id: 'technology-as-kingdom-stewardship',
    title: 'Technology as Kingdom Stewardship: Building Systems That Serve Purpose',
    category: 'Kingdom Leadership',
    summary: 'Exploring how software engineering and media production intersect with spiritual stewardship — why I believe great software begins with understanding people and ends with honoring God through excellence.',
    date: 'Aug 10, 2026',
    image: '/images/media_engineering.png',
    featured: true,
    readTime: '6 min read'
  },
  {
    id: 'react-vite-frontend-architecture',
    title: 'Building Scalable Front-End Architecture with React & Vite',
    category: 'Front-End',
    summary: 'Lessons learned from architecting production-ready React applications using Vite, TypeScript integration, component-driven design, and responsive UI patterns for real-world projects in East Africa.',
    date: 'Jul 28, 2026',
    image: '/images/material3.png',
    featured: false,
    readTime: '5 min read'
  },
  {
    id: 'church-media-production-systems',
    title: 'Engineering Church Media Systems: From OBS Studio to Behringer X32',
    category: 'Media Engineering',
    summary: 'A deep dive into managing end-to-end media production for live ministry — coordinating audio engineering with Behringer X32, livestreaming via OBS Studio, and building reliable digital communication pipelines.',
    date: 'Jul 15, 2026',
    image: '/images/fluid_grids.png',
    featured: false,
    readTime: '7 min read'
  }
];
