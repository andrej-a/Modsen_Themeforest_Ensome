import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';

import {
    BreadCrumb,
    DarkPagePreviewContainer,
    DarkPagePreviewContent,
    DarkPagePreviewDescription,
    DarkPagePreviewTitle,
    Description,
} from './styles';
import IDarkPageTitle from './types';

const DarkPageTitle = memo(
    ({ title, description, settings }: IDarkPageTitle) => {
        const { descriptionSize } = settings;
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
    },
);

export default DarkPageTitle;
