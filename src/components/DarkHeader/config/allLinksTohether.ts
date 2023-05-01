import { ISettings } from '@/components/DropDownMenuList/types';
import contactList from '@/config/contactList';
import links from '@/config/links';
import { dictionary } from '@/types/constants';

import { serviceLinks } from './service';

const { QUICK_LINK, SERVICE, CONTACT_INFO } = dictionary;

const contacts = Object.entries(contactList).map(([key, value]) => ({
    id: key,
    link: value.href,
    title: value.value,
    description: value.description,
    contact: value.contact,
}));

const allLinksTogether: ISettings[] = [
    {
        linksTitles: QUICK_LINK,
        linksPaths: links,
    },
    {
        linksTitles: SERVICE,
        linksPaths: serviceLinks,
    },
    {
        linksTitles: CONTACT_INFO,
        linksPaths: contacts,
    },
];

export default allLinksTogether;
