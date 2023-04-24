interface ILink {
    logo: string;
    link: string;
}

interface SocialLinks {
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
