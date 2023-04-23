import React from 'react';

import { SliderComponent } from '@/components';
import { ReviewCard } from '@/componentsLibrary';
import testimonialsData from '@/config/testimonials';

const Testimonials = () => {
    return (
        <SliderComponent
            countOfTheCards={2}
            title="What our customers say"
            size="medium"
        >
            {testimonialsData.map(data => {
                return (
                    <ReviewCard
                        type={{ size: 'medium', type: 'image outside' }}
                        content={data}
                    />
                );
            })}
        </SliderComponent>
    );
};

export default Testimonials;
