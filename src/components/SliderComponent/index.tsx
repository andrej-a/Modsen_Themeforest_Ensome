import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSwipeable } from 'react-swipeable';

import leftArrow from '@/assets/images/logo/leftArrow.png';
import rightArrow from '@/assets/images/logo/rightArrow.png';
import { ImageComponent } from '@/components';

import {
    Slider,
    SliderButton,
    SliderCarousel,
    SliderContentHeader,
    SliderContentTitle,
    SliderControls,
    SliderDescription,
    SliderSectionContent,
} from './styles';
import { ISliderProps } from './types';

const SliderComponent = memo(
    ({
        title,
        description,
        size = 'small',
        countOfTheCards,
        settings,
        innerControls,
        children,
    }: ISliderProps) => {
        const [currentCardsIndex, setCurrentCardsIndex] = useState(0);
        const childrensLength = React.Children.count(children);
        const { isDescription, isButtonsControls, contentPosition } = settings;
        const moveLeft = () => {
            if (
                !(
                    Math.abs(currentCardsIndex - 1) ===
                    childrensLength / countOfTheCards
                )
            ) {
                setCurrentCardsIndex(prevIndex => prevIndex - 1);
            }
        };
        const moveRight = () => {
            if (currentCardsIndex) {
                setCurrentCardsIndex(prevIndex => prevIndex + 1);
            }
        };
        const swipeHandlers = useSwipeable({
            onSwipedLeft: moveLeft,
            onSwipedRight: moveRight,
        });

        const { t } = useTranslation();

        return (
            <>
                <SliderSectionContent size={size}>
                    <SliderContentHeader contentPosition={contentPosition}>
                        <SliderContentTitle>{t(title)}</SliderContentTitle>
                        {isButtonsControls && (
                            <SliderControls>
                                <SliderButton
                                    disabled={!currentCardsIndex}
                                    isDisabled={!currentCardsIndex}
                                    onClick={moveRight}
                                >
                                    <ImageComponent source={leftArrow} />
                                </SliderButton>
                                <SliderButton
                                    data-test="moveLeftButton"
                                    disabled={
                                        Math.abs(currentCardsIndex - 1) >=
                                        childrensLength / countOfTheCards
                                    }
                                    isDisabled={
                                        Math.abs(currentCardsIndex - 1) >=
                                        childrensLength / countOfTheCards
                                    }
                                    onClick={moveLeft}
                                >
                                    <ImageComponent source={rightArrow} />
                                </SliderButton>
                            </SliderControls>
                        )}
                    </SliderContentHeader>
                    {isDescription && (
                        <SliderDescription contentPosition={contentPosition}>
                            {description ? t(description) : ''}
                        </SliderDescription>
                    )}
                    <Slider>
                        <SliderCarousel
                            {...swipeHandlers}
                            params={{
                                index: currentCardsIndex,
                                childrensLength,
                                isButtonsControls,
                            }}
                            innerControls={innerControls!}
                        >
                            {children}
                        </SliderCarousel>
                    </Slider>
                </SliderSectionContent>
            </>
        );
    },
);

export default SliderComponent;
