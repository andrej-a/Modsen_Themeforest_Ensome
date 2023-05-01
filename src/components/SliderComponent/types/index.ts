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

export interface ISliderProps {
    title: string;
    description: string;
    countOfTheCards: number;
    size?: 'small' | 'medium';
    settings: ISliderSettings;
    innerControls: ISliderControls;
    children: React.ReactNode;
}
