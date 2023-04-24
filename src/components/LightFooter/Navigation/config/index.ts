import { dictionary, linksConstants } from '@/types/constants';

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

const navigation = [
    {
        title: ABOUT,
        links: [
            {
                to: HOME,
                link: HOME_PAGE,
            },
            {
                to: ABOUT_US,
                link: ABOUT_US_PAGE,
            },
            {
                to: SERVICES,
                link: SERVICES_PAGE,
            },
            { to: SOLUTIONS, link: SOLUTION_PAGE },
        ],
    },

    {
        title: INFORMATION,
        links: [
            {
                to: CONTACTS,
                link: CONTACTS_PAGE,
            },
            {
                to: OUR_TEAM,
                link: OUR_TEAM_PAGE,
            },
            {
                to: BLOG,
                link: BLOG_PAGE,
            },
            {
                to: 'FAQ',
                link: FAQ_PAGE,
            },
        ],
    },

    {
        title: SERVICE,
        links: [
            {
                to: PAGES,
                link: HOME_PAGE,
            },
            {
                to: ELEMENTS,
                link: HOME_PAGE,
            },
            { to: SITE_MAP, link: HOME_PAGE },
            {
                to: PRICING,
                link: HOME_PAGE,
            },
            {
                to: 'FAQ',
                link: FAQ_PAGE,
            },
        ],
    },
];

export default navigation;
