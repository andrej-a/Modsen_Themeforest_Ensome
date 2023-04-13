export const cutString = (str: string): string => {
    const stringWithoutTags = str.replace(/<\*?.+?>/gi, '');
    if (stringWithoutTags.length > 40) {
        return `${stringWithoutTags.slice(0, 200)}...`;
    }
    return stringWithoutTags;
};
