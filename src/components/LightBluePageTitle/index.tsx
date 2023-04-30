import React from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';

import { Title, TitleContainer, TitleContent } from './styles';

interface ISingleBlogTitle {
    title: string;
    isBreadCrumbsShort?: boolean;
}

const PageTitleWithLightBlueBackground = ({
    title,
    isBreadCrumbsShort,
}: ISingleBlogTitle) => {
    const { t } = useTranslation();

    return (
        <TitleContainer>
            <TitleContent>
                <Title data-test="lightBluePageTitle">{t(title)}</Title>
                <BreadCrumbs
                    isShortland={isBreadCrumbsShort}
                    linkColor="grey"
                    crumbColor="black"
                />
            </TitleContent>
        </TitleContainer>
    );
};

export default PageTitleWithLightBlueBackground;
