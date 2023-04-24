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

export const decodeString = (str: string): string => {
    let correctLink = str.replace(/%20/gi, ' ');
    correctLink = decodeURIComponent(str);
    return correctLink.charAt(0).toUpperCase() + correctLink.slice(1);
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
