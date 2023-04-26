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

const DarkPageTitle = ({ title, description, settings }: IDarkPageTitle) => {
    const { descriptionSize, size } = settings;
    const { t } = useTranslation();
    return (
        <DarkPagePreviewContainer>
            <DarkPagePreviewContent>
                <BreadCrumb>
                    <BreadCrumbs linkColor="grey" crumbColor="white" />
                </BreadCrumb>
                <DarkPagePreviewDescription>
                    <DarkPagePreviewTitle data-test="darkPageTitle">
                        {t(title)}
                    </DarkPagePreviewTitle>
                    <Description
                        descriptionSize={descriptionSize}
                        dangerouslySetInnerHTML={{
                            __html: t(description),
                        }}
                    />
                </DarkPagePreviewDescription>
            </DarkPagePreviewContent>
        </DarkPagePreviewContainer>
    );
};

export default DarkPageTitle;
