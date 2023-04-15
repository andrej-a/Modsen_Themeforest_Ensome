import Address from '@/assets/images/logo/address.png';
import EmailIcon from '@/assets/images/logo/email.png';
import PhoneIcon from '@/assets/images/logo/phone.png';

export const cutString = (str: string): string => {
    const stringWithoutTags = str.replace(/<\*?.+?>/gi, '');
    if (stringWithoutTags.length > 40) {
        return `${stringWithoutTags.slice(0, 200)}...`;
    }
    return stringWithoutTags;
};

export const capitalize = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getIcon = (type: string) => {
    switch (type) {
        case 'Email':
            return EmailIcon;
        case 'Phone':
            return PhoneIcon;
        case 'Address':
            return Address;
        default:
            break;
    }
};
