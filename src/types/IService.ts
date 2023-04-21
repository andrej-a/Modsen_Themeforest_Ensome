import { ISolution } from './ISolution';

interface IServiceSinglePageContent {
    customer: string;
    challenge: string;
    solution: string;
    results: string;
    tech: string;
}

export interface IService {
    image: string;
    glassImage: string;
    title: string;
    description: string;
    solutionList: string;
    link: string;
    content: IServiceSinglePageContent;
}

export type TService = IService[];

export type ServiceCardProps = {
    type: 'right text' | 'center text' | 'wide glass icon' | 'small';
    content: IService | ISolution;
};
