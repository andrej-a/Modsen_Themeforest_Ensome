export type HeaderProps = {
    background?: string;
    children?: React.ReactNode;
};
export type WatchVideoButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
    type?: 'primary' | 'secondary';
};
export type HeaderContentProps = {
    type?: 'primary' | 'secondary';
};

export type LogoComponentProps = { source: string };
