import React from 'react';

import { SliderComponent } from '@/components';
import { ReviewCard } from '@/componentsLibrary';
import testimonialsData from '@/config/testimonials';
import useMobile from '@/hooks/useMobile';
import useSliderCards from '@/hooks/useSlider';
import { dictionary, size } from '@/types/constants';

const { laptopM } = size;
const { TESTIMONIALS, CLIENTS_TESTIMONIALS, ABOUT_OUR_CLIENTS } = dictionary;

const Testimonials = () => {
    const { isMobile } = useMobile(laptopM);
    const { sliderCards } = useSliderCards(2);
    return (
        <SliderComponent
            countOfTheCards={sliderCards!}
            title={isMobile ? TESTIMONIALS : CLIENTS_TESTIMONIALS}
            description={isMobile ? ABOUT_OUR_CLIENTS : ''}
            settings={{
                isButtonsControls: true,
                isDescription: true,
                contentPosition: 'space-between',
            }}
            innerControls={{
                isInclude: false,
                cardsSize: 0,
                innerGap: 0,
                innerPadding: 0,
                innerTransform: 0,
            }}
            size={isMobile ? 'small' : 'medium'}
        >
            {testimonialsData.map((data, index) => {
                return (
                    <ReviewCard
                        key={index}
                        type={{
                            size: isMobile ? 'small' : 'medium',
                            type: isMobile ? 'image inside' : 'image outside',
                        }}
                        content={data}
                    />
                );
            })}
        </SliderComponent>
    );
};

export default Testimonials;
