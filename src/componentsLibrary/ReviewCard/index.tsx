import React, { memo } from 'react';

import ImageComponent from '@/components/ImageComponent';

import {
    AuthorAvatar,
    AuthorInformationContainer,
    AuthorInformationName,
    AuthorInformationRole,
    TestimonialCard,
    TestimonialCardHeader,
    TestimonialText,
} from './styles';
import IReviewCardProps from './types';

const ReviewCard = memo(
    ({
        type: { type, size },
        content: { avatar, name, role, testimonial },
    }: IReviewCardProps) => {
        return (
            <TestimonialCard type={type} size={size}>
                <TestimonialCardHeader>
                    <AuthorAvatar type={type}>
                        <ImageComponent source={avatar} />
                    </AuthorAvatar>
                    <AuthorInformationContainer>
                        <AuthorInformationName>{name}</AuthorInformationName>
                        <AuthorInformationRole>{role}</AuthorInformationRole>
                    </AuthorInformationContainer>
                </TestimonialCardHeader>
                <TestimonialText type={type}>{testimonial}</TestimonialText>
            </TestimonialCard>
        );
    },
);
export default ReviewCard;
