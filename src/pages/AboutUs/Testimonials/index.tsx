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
            countOfTheCards={sliderCards}
            title="What our customers say"
            size="medium"
        >
            {testimonialsData.map((data, index) => {
                return (
                    <ReviewCard
                        key={index}
                        type={{
                            size: isMobile ? 'small' : 'medium',
                            type: 'image outside',
                        }}
                        content={data}
                    />
                );
            })}
        </SliderComponent>
    );
};

export default Testimonials;
