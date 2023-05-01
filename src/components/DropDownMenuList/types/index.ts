import { ILink } from '@/config/links';

export interface ISettings {
    linksTitles: string;
    linksPaths: ILink[];
}
export interface DropDownMenuListProps {
    settings: ISettings[];
    type: 'light' | 'dark';
    onHandleMenu?: (status: boolean) => () => void;
}

interface DropDownMenuItemProps {
    category: string;
    links: ILink[];
    type: string;
    onHandleMenu?: (status: boolean) => () => void;
}

export default DropDownMenuItemProps;
