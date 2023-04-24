import React from 'react';
import { useTranslation } from 'react-i18next';

import AdvantagesSection from '@/assets/images/pictures/advantages_section.png';
import { ImageComponent } from '@/components';
import { dictionary } from '@/types/constants';

import advantages from './config/advantages';
import {
    AdvantagesContainer,
    AdvantagesContent,
    AdvantagesDescription,
    AdvantagesImage,
    AdvantagesItem,
    AdvantagesItemDescription,
    AdvantagesItemTitle,
    Title,
} from './styles';

const { ADVANTAGES_TITLE } = dictionary;
const Advantages = () => {
    const { t } = useTranslation();
    return (
        <AdvantagesContainer>
            <AdvantagesContent>
                <AdvantagesImage>
                    <ImageComponent source={AdvantagesSection} />
                </AdvantagesImage>
                <AdvantagesDescription>
                    <Title>{t(ADVANTAGES_TITLE)}</Title>
                    {advantages.map(({ title, description }) => {
                        return (
                            <AdvantagesItem key={title}>
                                <AdvantagesItemTitle>
                                    <ImageComponent source="./logo/checkImage.png" />
                                    {t(title)}
                                </AdvantagesItemTitle>
                                <AdvantagesItemDescription>
                                    {t(description)}
                                </AdvantagesItemDescription>
                            </AdvantagesItem>
                        );
                    })}
                </AdvantagesDescription>
            </AdvantagesContent>
        </AdvantagesContainer>
    );
};

export default Advantages;
