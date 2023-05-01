interface IDarkPageTitleSettings {
    descriptionSize: 'small' | 'medium';
    size: 'small' | 'medium';
}

interface IDarkPageTitle {
    title: string;
    description: string;
    settings: IDarkPageTitleSettings;
}

export default IDarkPageTitle;
