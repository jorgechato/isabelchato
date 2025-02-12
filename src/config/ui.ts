import { Linkedin, IdCard } from 'lucide-react';

export const SOCIAL_MEDIA: Record<string, { name: string; icon: any }> = {
    linkedin: {
        name: 'Linkedin',
        icon: Linkedin,
    },
    orcid: {
        name: 'ORCID',
        icon: IdCard,
    },
};

export type MenuType = {
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
    {
        name: 'Library',
        url: '/library',
    },
];
