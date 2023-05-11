import React from 'react';
import { useTranslation } from 'react-i18next';

import AboutUsMobile from '@/assets/images/pictures/about_us_mobile.png';
import { ImageComponent } from '@/components';
import { dictionary } from '@/types/constants';

import {
    Content,
    ContentContainer,
    Description,
    ImageContainer,
} from './styles';

const { ABOUT_US_LONG_DESCRIBE } = dictionary;

const TeamDescriptionMobile = () => {
    const { t } = useTranslation();
    return (
        <ContentContainer>
            <Content>
                <ImageContainer>
                    <ImageComponent source={AboutUsMobile} />
                </ImageContainer>
                <Description
                    dangerouslySetInnerHTML={{
                        __html: t(ABOUT_US_LONG_DESCRIBE),
                    }}
                />
            </Content>
        </ContentContainer>
    );
};

export default TeamDescriptionMobile;
