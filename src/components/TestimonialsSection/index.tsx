import React from 'react';

import { SliderComponent } from '@/components';
import { ReviewCard } from '@/componentsLibrary';
import useSliderCards from '@/hooks/useSlider';
import { dictionary } from '@/types/constants';

import testimonialsData from '../../config/testimonials';
import { TestimonialsSectionContainer } from './style';

const { TESTIMONIALS } = dictionary;

const TestimonialsSection = () => {
    const { sliderCards } = useSliderCards();
    return (
        <TestimonialsSectionContainer>
            <SliderComponent countOfTheCards={sliderCards} title={TESTIMONIALS}>
                {testimonialsData.map(data => {
                    return (
                        <ReviewCard
                            type={{ size: 'small', type: 'image inside' }}
                            content={data}
                        />
                    );
                })}
            </SliderComponent>
        </TestimonialsSectionContainer>
    );
};

export default TestimonialsSection;
