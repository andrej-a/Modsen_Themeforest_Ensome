interface ILink {
    logo: string;
    link: string;
}

export interface SocialLinks {
    facebook: ILink;
    twitter: ILink;
    linkedin: ILink;
}

interface ITeamMember {
    name: string;
    photo: string;
    position: string;
    description: string;
    social: SocialLinks;
}
export default ITeamMember;

type TPersonCardType = 'with icon links' | 'vertical' | 'horizontal';

interface IContent {
    name: string;
    photo: string;
    position: string;
    social: SocialLinks;
}
export interface PersonCardProps {
    settings: {
        type: TPersonCardType;
        content: IContent;
    };
}
