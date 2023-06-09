import { ButtonHTMLAttributes } from 'react';

import { PaymentCardProps } from '@/components/PricingSection';

import { SocialLinks } from './IPerson';

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

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export interface IStatisticCard {
    number: string;
    description: string;
}

export type ModalWindowProps = {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    children?: React.ReactNode;
};

interface ISliderSettings {
    isButtonsControls: boolean;
    isDescription: boolean;
    contentPosition: 'left' | 'center' | 'space-between';
}

export interface ISliderControls {
    isInclude: boolean;
    cardsSize: number;
    innerGap: number;
    innerPadding: number;
    innerTransform: number;
}

export type SliderProps = {
    title: string;
    description: string;
    countOfTheCards: number;
    size?: 'small' | 'medium';
    settings: ISliderSettings;
    innerControls: ISliderControls;
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
    type: 'light' | 'dark';
};

export type TPayload<T> = {
    payload: T;
};

export type TLinksStack = {
    title: string;
    link: string;
};

export interface IElasticContainerItems {
    isVisible: boolean;
    onSetIsVisible: (status: boolean) => () => void;
}

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isActive?: boolean;
}

export interface IAccordionCard {
    content: string;
}

export type PageTitleProps = {
    size?: 'low' | 'medium' | 'big';
    subTitle?: string;
    title: string;
    description: string;
};
export type PageContainerProps = {
    children?: React.ReactNode;
};

export type BlogCardProps = {
    settings: {
        type:
            | 'big'
            | 'medium'
            | 'small'
            | 'right text'
            | 'without description'
            | 'no img';
    };
    content: {
        id: string;
        author: string;
        image: string;
        countOfTheViews: string;
        publishDate: string;
        blogTitle: string;
        firstContentPart: string;
        separateParagraph: string;
        secondContentPart: string;
        share: string;
        tagsTitle: string;
        tagsArray: string[];
    };
};

interface IDarkPageTitleSettings {
    descriptionSize: 'small' | 'medium';
    size: 'small' | 'medium';
}

export interface IDarkPageTitle {
    title: string;
    description: string;
    settings: IDarkPageTitleSettings;
}

export type TSearchField = {
    search: string;
};

export type ElasticItemComponentProps = {
    matchedServices: string[];
    onSetIsVisible: (status: boolean) => () => void;
};

export interface PersonComponentProps {
    name: string;
    photo: string;
    position: string;
    index: number;
    social: SocialLinks;
}
