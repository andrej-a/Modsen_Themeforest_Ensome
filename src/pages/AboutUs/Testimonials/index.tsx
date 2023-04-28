import React from 'react';

import { SliderComponent } from '@/components';
import { ReviewCard } from '@/componentsLibrary';
import testimonialsData from '@/config/testimonials';
import useMobile from '@/hooks/useMobile';
import useSliderCards from '@/hooks/useSlider';
import { size } from '@/types/constants';

const { laptopM } = size;

const Testimonials = () => {
    const { isMobile } = useMobile(laptopM);
    const { sliderCards } = useSliderCards(2);
    return (
        <SliderComponent
            countOfTheCards={sliderCards!}
            title={isMobile ? 'Testimonials' : 'What our customers say'}
            description={
                isMobile
                    ? 'Doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
                    : ''
            }
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
