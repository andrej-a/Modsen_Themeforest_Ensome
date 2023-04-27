import React, { memo } from 'react';
import { ReactSVG } from 'react-svg';

import { ImageComponent } from '@/components';
import { PersonCardProps } from '@/types/IPerson';

import {
    MainInfoContainer,
    PersonCardContainer,
    PersonCardContent,
    PersonCardImage,
    PersonInformation,
    PersonName,
    PersonPosition,
    SocialContainer,
    SocialLink,
} from './styles';

const PersonCard = memo(({ settings: { type, content } }: PersonCardProps) => {
    const { photo, name, position, social } = content;
    return (
        <PersonCardContainer type={type}>
            <PersonCardContent type={type}>
                <PersonCardImage type={type}>
                    <ImageComponent source={photo} />
                </PersonCardImage>
                <MainInfoContainer type={type}>
                    <PersonInformation type={type}>
                        <PersonName type={type}>{name}</PersonName>
                        <PersonPosition type={type}>{position}</PersonPosition>
                    </PersonInformation>
                    <SocialContainer type={type}>
                        {Object.values(social).map(({ link, logo }) => {
                            return (
                                <SocialLink href={link}>
                                    <ReactSVG src={logo} />
                                </SocialLink>
                            );
                        })}
                    </SocialContainer>
                </MainInfoContainer>
            </PersonCardContent>
        </PersonCardContainer>
    );
});

export default PersonCard;
