import React, { useState } from 'react';

import { ImageComponent, SliderComponent } from '@/components';
import { valuesOfTheSettings } from '@/types/constants';

import testimonialsData from './config';
import {
    AuthorAvatar,
    AuthorInformationContainer,
    AuthorInformationName,
    AuthorInformationRole,
    TestimonialCard,
    TestimonialCardHeader,
    TestimonialsSectionContainer,
    TestimonialText,
} from './style';

const { TESTIMONIALS } = valuesOfTheSettings;

const TestimonialsSection = () => {
    const [countCardsOnThePage, setCountCardsOnThePage] = useState(3);
    const [sizeOfTheScreen, setSizeOfTheScreen] = useState(1015);
    return (
        <TestimonialsSectionContainer>
            <SliderComponent title={TESTIMONIALS}>
                {testimonialsData.map(
                    ({ avatar, role, name, testimonial, id }) => {
                        return (
                            <TestimonialCard
                                countCardsOnThePage={countCardsOnThePage}
                                sizeOfTheScreen={sizeOfTheScreen}
                                key={id}
                            >
                                <TestimonialCardHeader>
                                    <AuthorAvatar>
                                        <ImageComponent source={avatar} />
                                    </AuthorAvatar>
                                    <AuthorInformationContainer>
                                        <AuthorInformationName>
                                            {name}
                                        </AuthorInformationName>
                                        <AuthorInformationRole>
                                            {role}
                                        </AuthorInformationRole>
                                    </AuthorInformationContainer>
                                </TestimonialCardHeader>
                                <TestimonialText>{testimonial}</TestimonialText>
                            </TestimonialCard>
                        );
                    },
                )}
            </SliderComponent>
        </TestimonialsSectionContainer>
    );
};

export default TestimonialsSection;
