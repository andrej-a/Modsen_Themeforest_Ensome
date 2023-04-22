import { v4 as uuidv4 } from 'uuid';

import { dictionary } from '@/types/constants';

const { HOME, BLOG, CONTACTS, SERVICES, SOLUTIONS } = dictionary;

const links = [
    {
        id: uuidv4(),
        link: '/',
        title: HOME,
    },
    {
        id: uuidv4(),
        link: '/solutions',
        title: SOLUTIONS,
    },
    {
        id: uuidv4(),
        link: '/blog',
        title: BLOG,
    },
    {
        id: uuidv4(),
        link: '/contacts',
        title: CONTACTS,
    },
    {
        id: uuidv4(),
        link: '/services',
        title: SERVICES,
    },
    {
        id: uuidv4(),
        link: '/FAQs',
        title: 'FAQ',
    },
];

export const singlePagesLinks = [
    {
        id: uuidv4(),
        link: '/:blog',
        title: '',
    },
    {
        id: uuidv4(),
        link: '/service/:title',
        title: '',
    },
    {
        id: uuidv4(),
        link: '/solutions/:title',
        title: '',
    },
];

export default links;
