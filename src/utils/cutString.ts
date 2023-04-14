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
