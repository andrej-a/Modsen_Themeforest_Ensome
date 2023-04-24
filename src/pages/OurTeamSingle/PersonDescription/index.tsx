import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';

import { ImageComponent } from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { ourTeamSelector } from '@/store/selectors/selectors';
import { dictionary } from '@/types/constants';

import {
    Content,
    ContentContainer,
    DescriptionContainer,
    DescriptionData,
    Photo,
    SocialLink,
    SocialLinks,
    Text,
    Title,
} from './styles';

const { SOCIAL_NETWORKS } = dictionary;

const PersonInformation = () => {
    const { currentPerson } = useAppSelector(ourTeamSelector);
    const { photo, name, position, description, social } = currentPerson;
    const mainInformation = [name, position, description];
    const personInformation = ['Name', 'Position', 'Description'];
    const { t } = useTranslation();
    return (
        <ContentContainer>
            <Content>
                <Photo>
                    <ImageComponent source={photo} />
                </Photo>
                <DescriptionContainer>
                    {mainInformation.map((value, index) => {
                        return (
                            <DescriptionData key={index}>
                                <Title>{t(personInformation[index])}</Title>
                                <Text>{t(value)}</Text>
                            </DescriptionData>
                        );
                    })}
                    <DescriptionData>
                        <Title>{t(SOCIAL_NETWORKS)}</Title>
                        <SocialLinks>
                            {Object.values(social).map(({ link, logo }) => {
                                return (
                                    <SocialLink href={link}>
                                        <ReactSVG src={logo} />
                                    </SocialLink>
                                );
                            })}
                        </SocialLinks>
                    </DescriptionData>
                </DescriptionContainer>
            </Content>
        </ContentContainer>
    );
};

export default PersonInformation;
