import { v4 as uuidv4 } from 'uuid';

import { dictionary, linksConstants } from '@/types/constants';

const { HOME, BLOG, CONTACTS, SERVICES, SOLUTIONS, ABOUT_US, OUR_TEAM } =
    dictionary;
const {
    HOME_PAGE,
    BLOG_PAGE,
    SOLUTION_PAGE,
    CONTACTS_PAGE,
    OUR_TEAM_PAGE,
    ABOUT_US_PAGE,
    SERVICES_PAGE,
    FAQ_PAGE,
} = linksConstants;

const links = [
    {
        id: uuidv4(),
        link: HOME_PAGE,
        title: HOME,
    },
    {
        id: uuidv4(),
        link: SOLUTION_PAGE,
        title: SOLUTIONS,
    },
    {
        id: uuidv4(),
        link: BLOG_PAGE,
        title: BLOG,
    },
    {
        id: uuidv4(),
        link: CONTACTS_PAGE,
        title: CONTACTS,
    },
    {
        id: uuidv4(),
        link: OUR_TEAM_PAGE,
        title: OUR_TEAM,
    },
    {
        id: uuidv4(),
        link: ABOUT_US_PAGE,
        title: ABOUT_US,
    },
    {
        id: uuidv4(),
        link: SERVICES_PAGE,
        title: SERVICES,
    },
    {
        id: uuidv4(),
        link: FAQ_PAGE,
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
    {
        id: uuidv4(),
        link: '/our team/:name',
        title: '',
    },
];

export default links;
