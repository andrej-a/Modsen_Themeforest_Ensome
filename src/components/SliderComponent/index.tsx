import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import leftArrow from '@/assets/images/logo/leftArrow.png';
import rightArrow from '@/assets/images/logo/rightArrow.png';
import { ImageComponent } from '@/components';
import { SliderProps } from '@/types/componentsOptions';

import {
    Slider,
    SliderButton,
    SliderCarousel,
    SliderContentHeader,
    SliderContentTitle,
    SliderControls,
    SliderSectionContent,
} from './styles';

const SliderComponent = ({ title, children }: SliderProps) => {
    const [currentCardsIndex, setCurrentCardsIndex] = useState(0);
    const childrensLength = React.Children.count(children);

    const moveLeft = () => {
        if (!(Math.abs(currentCardsIndex - 1) === childrensLength / 3)) {
            setCurrentCardsIndex(prevIndex => prevIndex - 1);
        }
    };
    const moveRight = () => {
        if (currentCardsIndex) {
            setCurrentCardsIndex(prevIndex => prevIndex + 1);
        }
    };

    const { t } = useTranslation();

    return (
        <>
            <SliderSectionContent>
                <SliderContentHeader>
                    <SliderContentTitle>{t(title)}</SliderContentTitle>
                    <SliderControls>
                        <SliderButton
                            disabled={!currentCardsIndex}
                            isDisabled={!currentCardsIndex}
                            onClick={moveRight}
                        >
                            <ImageComponent source={leftArrow} />
                        </SliderButton>
                        <SliderButton
                            disabled={
                                Math.abs(currentCardsIndex - 1) ===
                                childrensLength / 3
                            }
                            isDisabled={
                                Math.abs(currentCardsIndex - 1) ===
                                childrensLength / 3
                            }
                            onClick={moveLeft}
                        >
                            <ImageComponent source={rightArrow} />
                        </SliderButton>
                    </SliderControls>
                </SliderContentHeader>
                <Slider>
                    <SliderCarousel
                        params={{
                            index: currentCardsIndex,
                            childrensLength,
                        }}
                    >
                        {children}
                    </SliderCarousel>
                </Slider>
            </SliderSectionContent>
        </>
    );
};

export default SliderComponent;
