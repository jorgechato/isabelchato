import sns from './sns.json';
import profile from './profile.json';
import { MENU, SOCIAL_MEDIA } from './ui';

const SNS_DICT = { ...sns } as const;

type SNSType = {
    name: string;
    icon: any;
    url: string;
}

export function getSNS(): SNSType[] {
    let snsList: SNSType[] = []
    Object.entries(SNS_DICT).forEach(([key, value]) => {
        snsList.push({
            name: SOCIAL_MEDIA[key].name,
            icon: SOCIAL_MEDIA[key].icon,
            url: value,

        })
    })
    return snsList;
}

export function getProfile() {
    return { ...profile };
}

export function getMenu() {
    return MENU;
}
