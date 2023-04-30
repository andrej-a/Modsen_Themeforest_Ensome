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
            <SliderComponent
                settings={{
                    isButtonsControls: true,
                    isDescription: false,
                    contentPosition: 'space-between',
                }}
                innerControls={{
                    isInclude: false,
                    cardsSize: 275,
                    innerGap: 28,
                    innerPadding: 44,
                    innerTransform: 300,
                }}
                description=""
                countOfTheCards={sliderCards!}
                title={TESTIMONIALS}
            >
                {testimonialsData.map((data, index) => {
                    return (
                        <ReviewCard
                            key={index}
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
