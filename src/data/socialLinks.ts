export interface SocialLink {
  name: string;
  url: string;
  iconName: 'linkedin' | 'github' | 'twitter' | 'youtube' | 'instagram' | 'facebook' | 'whatsapp' | 'code';
  status?: 'active' | 'coming-soon';
}

export const socialLinksData: SocialLink[] = [
  {
    name: 'WhatsApp',
    url: 'https://wa.me/256701951404?text=Hello%20Stephen%2C%20I%20reached%20out%20from%20your%20portfolio!',
    iconName: 'whatsapp',
    status: 'active'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/stephen-wasswa',
    iconName: 'linkedin',
    status: 'active'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Wasswa-Phen',
    iconName: 'github',
    status: 'active'
  },
  {
    name: 'Twitter / X',
    url: 'https://x.com/wasswa_phen',
    iconName: 'twitter',
    status: 'active'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@PhenyLabs',
    iconName: 'youtube',
    status: 'active'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/wasswa_phen/',
    iconName: 'instagram',
    status: 'active'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/WasswaPhenDaniel',
    iconName: 'facebook',
    status: 'active'
  },
  {
    name: 'Google Dev Profile',
    url: '#',
    iconName: 'code',
    status: 'coming-soon'
  }
];
