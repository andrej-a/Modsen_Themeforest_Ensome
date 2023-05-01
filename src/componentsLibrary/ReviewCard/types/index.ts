interface ISettings {
    type: 'image inside' | 'image outside';
    size: 'small' | 'medium';
}

interface IContent {
    id: string;
    avatar: string;
    name: string;
    role: string;
    testimonial: string;
}

export default interface IReviewCardProps {
    type: ISettings;
    content: IContent;
}
