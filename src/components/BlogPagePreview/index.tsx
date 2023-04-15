import React from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';
import { valuesOfTheSettings } from '@/types/constants';

import {
    BlogPagePreviewContainer,
    BlogPagePreviewContent,
    BlogPagePreviewDescription,
    BlogPagePreviewTitle,
    BreadCrumb,
    Description,
} from './styles';

const { BLOG, BLOG_DESCRIPTION } = valuesOfTheSettings;

const BlogPagePreview = () => {
    const { t } = useTranslation();
    return (
        <BlogPagePreviewContainer>
            <BlogPagePreviewContent>
                <BreadCrumb>
                    <BreadCrumbs linkColor="grey" crumbColor="white" />
                </BreadCrumb>
                <BlogPagePreviewDescription>
                    <BlogPagePreviewTitle>{t(BLOG)}</BlogPagePreviewTitle>
                    <Description>{t(BLOG_DESCRIPTION)}</Description>
                </BlogPagePreviewDescription>
            </BlogPagePreviewContent>
        </BlogPagePreviewContainer>
    );
};

export default BlogPagePreview;
