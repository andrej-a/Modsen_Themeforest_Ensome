import React from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';

import { Title, TitleContainer, TitleContent } from './styles';

interface ISingleBlogTitle {
    title: string;
}

const PageTitleWithLightBlueBackground = ({ title }: ISingleBlogTitle) => {
    const { t } = useTranslation();
    return (
        <TitleContainer>
            <TitleContent>
                <Title>{t(title)}</Title>
                <BreadCrumbs linkColor="grey" crumbColor="black" />
            </TitleContent>
        </TitleContainer>
    );
};

export default PageTitleWithLightBlueBackground;
