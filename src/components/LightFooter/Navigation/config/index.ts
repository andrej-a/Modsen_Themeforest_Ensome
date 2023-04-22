import { dictionary } from '@/types/constants';

const {
    HOME,
    ABOUT_US,
    SERVICES,
    SOLUTIONS,
    CONTACTS,
    OUR_TEAM,
    BLOG,
    SERVICE,
    PRICING,
    PAGES,
    ELEMENTS,
    SITE_MAP,
    ABOUT,
    INFORMATION,
} = dictionary;

const navigation = [
    {
        title: ABOUT,
        links: [
            {
                to: HOME,
                link: '/',
            },
            {
                to: ABOUT_US,
                link: '/about us',
            },
            {
                to: SERVICES,
                link: '/services',
            },
            { to: SOLUTIONS, link: '/solutions' },
        ],
    },

    {
        title: INFORMATION,
        links: [
            {
                to: CONTACTS,
                link: '/contacts',
            },
            {
                to: OUR_TEAM,
                link: '/our team',
            },
            {
                to: BLOG,
                link: '/blog',
            },
            {
                to: 'FAQ',
                link: '/FAQs',
            },
        ],
    },

    {
        title: SERVICE,
        links: [
            {
                to: PAGES,
                link: '/',
            },
            {
                to: ELEMENTS,
                link: '/',
            },
            { to: SITE_MAP, link: '/' },
            {
                to: PRICING,
                link: '/',
            },
            {
                to: 'FAQ',
                link: '/FAQs',
            },
        ],
    },
];

export default navigation;
