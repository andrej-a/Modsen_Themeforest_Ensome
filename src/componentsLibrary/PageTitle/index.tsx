import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';
import { PageTitleProps } from '@/types/componentsOptions';

import {
    BreadCrumbsWrapper,
    Content,
    Description,
    DescriptionWrapper,
    SubTitle,
    Title,
} from './styles';

const PageTitle = memo(
    ({ size, title, subTitle, description }: PageTitleProps) => {
        const { t } = useTranslation();

        return (
            <Content>
                <BreadCrumbsWrapper>
                    <BreadCrumbs linkColor="grey" crumbColor="black" />
                </BreadCrumbsWrapper>
                <DescriptionWrapper>
                    <SubTitle>{t(subTitle || '')}</SubTitle>
                    <Title>{t(title)}</Title>
                    <Description size={size!}>{t(description)}</Description>
                </DescriptionWrapper>
            </Content>
        );
    },
);

export default PageTitle;
