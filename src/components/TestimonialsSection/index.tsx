import React from 'react';

import { SliderComponent } from '@/components';
import { ReviewCard } from '@/componentsLibrary';
import { dictionary } from '@/types/constants';

import testimonialsData from '../../config/testimonials';
import { TestimonialsSectionContainer } from './style';

const { TESTIMONIALS } = dictionary;

const TestimonialsSection = () => {
    return (
        <TestimonialsSectionContainer>
            <SliderComponent countOfTheCards={3} title={TESTIMONIALS}>
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
