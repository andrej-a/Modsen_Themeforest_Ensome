import { IService } from './IService';

export type TSolution = Pick<
    IService,
    'image' | 'glassImage' | 'title' | 'description' | 'link'
>;

export interface ISolution extends TSolution {}
