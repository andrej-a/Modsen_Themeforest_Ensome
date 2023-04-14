import { PaymentCardProps } from '@/components/PricingSection';

export type HeaderProps = {
    background?: string;
    children?: React.ReactNode;
};
export type WatchVideoButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
    type?: 'primary' | 'secondary';
};
export type HeaderContentProps = {
    type?: 'primary' | 'secondary';
};

export type LogoComponentProps = { source: string };

export type RoundButtonProps = {
    onClick?: () => void;
    children?: React.ReactNode;
};

export interface IStatisticCard {
    number: string;
    description: string;
}

export type ModalWindowProps = {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
};

export type SliderProps = {
    title: string;
    children: React.ReactNode;
};

export type PricingCardProps = {
    kindOfThePlan: string;
    cost: string;
    listOfServices: string[];
    onHandlePlan: (plan: PaymentCardProps) => () => void;
    isPaymentCard: boolean;
};

export type PaymentModalWindowProps = {
    cost: string;
};

export type SubscribeSectionProps = {
    type: string;
};
