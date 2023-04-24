import React from 'react';
import { useTranslation } from 'react-i18next';

import OurMission from '@/assets/images/pictures/our_mission.png';
import WhoWeAre from '@/assets/images/pictures/who_we_are.png';
import { ImageComponent } from '@/components';
import { dictionary } from '@/types/constants';

import {
    Content,
    ContentContainer,
    Description,
    DescriptionContainer,
    DescriptionContent,
    Title,
} from './styles';

const { WHO_WE_ARE, ABOUT_US_TEXT, OUR_MISSION, ABOUT_OUR_MISSION } =
    dictionary;
const WhoWeAreSection = () => {
    const { t } = useTranslation();
    return (
        <ContentContainer>
            <Content>
                <DescriptionContainer>
                    <DescriptionContent>
                        <Title>{t(WHO_WE_ARE)}</Title>
                        <Description
                            dangerouslySetInnerHTML={{
                                __html: t(ABOUT_US_TEXT),
                            }}
                        />
                    </DescriptionContent>
                    <ImageComponent source={WhoWeAre} />
                </DescriptionContainer>
                <DescriptionContainer isReflect>
                    <DescriptionContent>
                        <Title>{t(OUR_MISSION)}</Title>
                        <Description
                            dangerouslySetInnerHTML={{
                                __html: t(ABOUT_OUR_MISSION),
                            }}
                        />
                    </DescriptionContent>
                    <ImageComponent source={OurMission} />
                </DescriptionContainer>
            </Content>
        </ContentContainer>
    );
};

export default WhoWeAreSection;
