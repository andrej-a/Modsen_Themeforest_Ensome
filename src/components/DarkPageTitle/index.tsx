import React from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';
import { IDarkPageTitle } from '@/types/componentsOptions';

import {
    BreadCrumb,
    DarkPagePreviewContainer,
    DarkPagePreviewContent,
    DarkPagePreviewDescription,
    DarkPagePreviewTitle,
    Description,
} from './styles';

const DarkPageTitle = ({ title, description }: IDarkPageTitle) => {
    const { t } = useTranslation();
    return (
        <DarkPagePreviewContainer>
            <DarkPagePreviewContent>
                <BreadCrumb>
                    <BreadCrumbs linkColor="grey" crumbColor="white" />
                </BreadCrumb>
                <DarkPagePreviewDescription>
                    <DarkPagePreviewTitle>{t(title)}</DarkPagePreviewTitle>
                    <Description>{t(description)}</Description>
                </DarkPagePreviewDescription>
            </DarkPagePreviewContent>
        </DarkPagePreviewContainer>
    );
};

export default DarkPageTitle;
