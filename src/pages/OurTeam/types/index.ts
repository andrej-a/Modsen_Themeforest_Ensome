interface ILink {
    logo: string;
    link: string;
}

export interface SocialLinks {
    facebook: ILink;
    twitter: ILink;
    linkedin: ILink;
}

export default interface IPersonComponentProps {
    name: string;
    photo: string;
    position: string;
    index: number;
    social: SocialLinks;
}
