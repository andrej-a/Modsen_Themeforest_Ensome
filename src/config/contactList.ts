import { dictionary } from '@/types/constants';

const { PHONE_NUMBER, EMAIL_ADDRESS, ADDRESS } = dictionary;

const contactList = {
    mail: {
        value: 'Email',
        description: EMAIL_ADDRESS,
        href: 'mailto:ensome@info.co.us',
        contact: 'ensome@info.co.us',
    },
    phoneNumber: {
        value: 'Phone',
        description: PHONE_NUMBER,
        href: 'tel:+1 601-201-5580',
        contact: '+1 601-201-5580',
    },
    adress: {
        value: 'Address',
        description: ADDRESS,
        href: 'https://yandex.by/maps/-/CCU8UQhRWC',
        contact: '1642 Washington Avenue, Jackson, MS, Mississippi, 39201',
    },
};
export default contactList;
