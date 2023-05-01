import { IService } from '../componentsLibrary/ServiceCard/types/IService';

export type TSolution = Pick<
    IService,
    'image' | 'glassImage' | 'title' | 'description' | 'link'
>;

interface IPage {
    id: string;
    title: string;
    image?: string;
    text: string;
    types?: string;
}

export interface ISolution extends TSolution {
    page: {
        definition: IPage;
        types: IPage;
        pracices: IPage;
        conclusion: IPage;
    };
}
