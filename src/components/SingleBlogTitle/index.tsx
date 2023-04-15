import React from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { blogSelector } from '@/store/selectors/selectors';

import { Title, TitleContainer, TitleContent } from './styles';

const SingleBlogTitle = () => {
    const {
        currentBlog: { blogTitle },
    } = useAppSelector(blogSelector);

    const { t } = useTranslation();
    return (
        <TitleContainer>
            <TitleContent>
                <Title>{t(blogTitle)}</Title>
                <BreadCrumbs linkColor="grey" crumbColor="black" />
            </TitleContent>
        </TitleContainer>
    );
};

export default SingleBlogTitle;
