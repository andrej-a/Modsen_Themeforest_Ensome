interface ISettings {
    type: 'variant 1' | 'variant 4';
    mainColor: string;
    secondColor: string;
}
interface IContent {
    main: string;
    second: string;
}
export default interface INumberComponent {
    settings: ISettings;
    content: IContent;
}
