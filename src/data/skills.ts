export interface SkillTag {
  name: string;
  category: 'languages' | 'frontend' | 'tooling' | 'creative' | 'production';
  highlight?: boolean;
}

export const skillsData: SkillTag[] = [
  // Programming Languages
  { name: 'HTML5', category: 'languages' },
  { name: 'CSS3', category: 'languages' },
  { name: 'JavaScript (ES6+)', category: 'languages', highlight: true },
  { name: 'C', category: 'languages' },
  { name: 'Java', category: 'languages' },
  { name: 'C#', category: 'languages' },

  // Front-End & Tools
  { name: 'React', category: 'frontend', highlight: true },
  { name: 'Vite', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend', highlight: true },
  { name: 'Node.js', category: 'frontend' },
  { name: 'Responsive Design', category: 'frontend' },

  // Version Control & DB
  { name: 'Git', category: 'tooling' },
  { name: 'GitHub', category: 'tooling' },
  { name: 'MySQL', category: 'tooling' },
  { name: 'VS Code', category: 'tooling' },

  // Creative Design
  { name: 'Adobe Photoshop', category: 'creative' },
  { name: 'Adobe Illustrator', category: 'creative' },
  { name: 'Figma', category: 'creative' },
  { name: 'UI/UX Design', category: 'creative' },

  // Video & Production
  { name: 'Adobe Premiere Pro', category: 'production' },
  { name: 'DaVinci Resolve', category: 'production' },
  { name: 'OBS Studio', category: 'production' },
  { name: 'Behringer X32', category: 'production' }
];

export const skillCategories: { key: string; label: string }[] = [
  { key: 'languages', label: 'Programming Languages' },
  { key: 'frontend', label: 'Front-End & Tools' },
  { key: 'tooling', label: 'Version Control & DB' },
  { key: 'creative', label: 'Creative Design' },
  { key: 'production', label: 'Video & Production' }
];
