import { Cypress } from 'cypress';

declare global {
    interface Window {
        Cypress: Cypress;
        store: any;
    }
    declare module '*.png';
    declare module '*.svg';
}
