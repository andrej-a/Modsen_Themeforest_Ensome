import { v4 as uuidv4 } from 'uuid';

import { dictionary, linksConstants } from '@/types/constants';

const { FAQ, PAGES, ELEMENTS, PRICING, SITE_MAP } = dictionary;
const { HOME_PAGE, ABOUT_US_PAGE, FAQ_PAGE } = linksConstants;
const services = [PAGES, ELEMENTS, FAQ, PRICING, SITE_MAP];

export const serviceLinks = [
    {
        id: uuidv4(),
        link: HOME_PAGE,
        title: PAGES,
    },
    {
        id: uuidv4(),
        link: ABOUT_US_PAGE,
        title: ELEMENTS,
    },
    {
        id: uuidv4(),
        link: FAQ_PAGE,
        title: FAQ,
    },
    {
        id: uuidv4(),
        link: HOME_PAGE,
        title: SITE_MAP,
    },
];

export default services;
