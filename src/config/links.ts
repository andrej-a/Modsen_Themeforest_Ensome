import { v4 as uuidv4 } from 'uuid';

import { valuesOfTheSettings } from '@/types/constants';

const { HOME, BLOG, CONTACTS } = valuesOfTheSettings;

const links = [
    {
        id: uuidv4(),
        link: '/',
        title: HOME,
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
];

export default links;
