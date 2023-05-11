import { v4 as uuidv4 } from 'uuid';

import { dictionary } from '@/types/constants';

const { OUR_TEAM, ABOUT_US, SERVICES } = dictionary;

const additionalLinks = [
    {
        id: uuidv4(),
        link: '/services',
        title: SERVICES,
    },
    {
        id: uuidv4(),
        link: '/about us',
        title: ABOUT_US,
    },
    {
        id: uuidv4(),
        link: '/our team',
        title: OUR_TEAM,
    },
    {
        id: uuidv4(),
        link: '/FAQs',
        title: 'FAQ',
    },
];

export default additionalLinks;
