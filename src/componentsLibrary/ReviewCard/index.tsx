import React from 'react';

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

interface ISettings {
    type: 'image inside' | 'image outside';
    size: 'small' | 'medium';
}

interface IContent {
    id: string;
    avatar: string;
    name: string;
    role: string;
    testimonial: string;
}

interface ReviewCardProps {
    type: ISettings;
    content: IContent;
}

const ReviewCard = ({
    type: { type, size },
    content: { avatar, name, role, testimonial },
}: ReviewCardProps) => {
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
};
export default ReviewCard;
