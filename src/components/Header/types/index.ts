export interface IAdditionapPages {
    isShow: boolean;
    onHandleShowAdditionalPages: (status: boolean) => () => void;
}

export type HeaderContentProps = {
    type?: 'primary' | 'secondary';
};

export interface IHeaderProps {
    background?: string;
    children?: React.ReactNode;
}
