import { v4 as uuidv4 } from 'uuid';

import { ISettings } from '@/components/DropDownMenuList/types';
import additionalLinks from '@/components/Header/AdditionalPages/config/additionalLinks';
import links, { ILink } from '@/config/links';
import { dictionary, linksConstants } from '@/types/constants';

const { HOME, SOLUTIONS, PAGES, ELEMENTS, BLOG, CONTACT, ABOUT_US, CONTACTS } =
    dictionary;
const {
    HOME_PAGE,
    SOLUTION_PAGE,
    ABOUT_US_PAGE,
    OUR_TEAM_PAGE,
    BLOG_PAGE,
    CONTACTS_PAGE,
} = linksConstants;

export const solutionsLinks: ILink[] = [
    {
        id: uuidv4(),
        link: SOLUTION_PAGE,
        title: SOLUTIONS,
    },
];

export const elementsLinks: ILink[] = [
    {
        id: uuidv4(),
        link: ABOUT_US_PAGE,
        title: ABOUT_US,
    },
];

export const blogLinks: ILink[] = [
    {
        id: uuidv4(),
        link: BLOG_PAGE,
        title: BLOG,
    },
];

export const contactsLinks: ILink[] = [
    {
        id: uuidv4(),
        link: CONTACTS_PAGE,
        title: CONTACT,
    },
];

const headerLinks: ILink[] = [
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
        link: ABOUT_US_PAGE,
        title: PAGES,
    },
    {
        id: uuidv4(),
        link: OUR_TEAM_PAGE,
        title: ELEMENTS,
    },
    {
        id: uuidv4(),
        link: BLOG_PAGE,
        title: BLOG,
    },
    {
        id: uuidv4(),
        link: CONTACTS_PAGE,
        title: CONTACT,
    },
];

export const burgerMenuLinks: ISettings[] = [
    {
        linksTitles: HOME,
        linksPaths: links,
    },
    {
        linksTitles: SOLUTIONS,
        linksPaths: solutionsLinks,
    },
    {
        linksTitles: PAGES,
        linksPaths: additionalLinks,
    },
    {
        linksTitles: ELEMENTS,
        linksPaths: elementsLinks,
    },
    {
        linksTitles: BLOG,
        linksPaths: blogLinks,
    },
    {
        linksTitles: CONTACTS,
        linksPaths: contactsLinks,
    },
];

export default headerLinks;
