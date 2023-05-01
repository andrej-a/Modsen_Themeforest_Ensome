export interface ICategoryItemProps {
    theme: string;
    description: string;
}

export interface IListItem {
    title: string;
    description: string;
}

export interface ICategories {
    content: IListItem[];
}

export interface IElasticContainerItems {
    isVisible: boolean;
    onSetIsVisible: (status: boolean) => () => void;
}
