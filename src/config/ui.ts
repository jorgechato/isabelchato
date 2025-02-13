import { IdCard, Linkedin, Newspaper } from 'lucide-react';

export const SOCIAL_MEDIA: Record<string, { name: string; icon: any }> = {
  orcid: {
    name: 'ORCID',
    icon: IdCard,
  },
  linkedin: {
    name: 'Linkedin',
    icon: Linkedin,
  },
  substack: {
    name: 'Substack',
    icon: Newspaper,
  },
};

export interface MenuType {
  name: string;
  url: string;
}

export const MENU: MenuType[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'About',
    url: '/about',
  },
];
