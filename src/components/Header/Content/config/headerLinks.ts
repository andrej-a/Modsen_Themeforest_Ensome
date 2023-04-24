import { v4 as uuidv4 } from 'uuid';

import { dictionary } from '@/types/constants';

const { HOME, SOLUTIONS, PAGES, ELEMENTS, BLOG, CONTACT } = dictionary;

const headerLinks = [
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
        link: '/about us',
        title: PAGES,
    },
    {
        id: uuidv4(),
        link: '/our team',
        title: ELEMENTS,
    },
    {
        id: uuidv4(),
        link: '/blog',
        title: BLOG,
    },
    {
        id: uuidv4(),
        link: '/contacts',
        title: CONTACT,
    },
];

export default headerLinks;
