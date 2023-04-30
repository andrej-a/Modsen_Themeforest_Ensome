import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { DefaultButton } from '@/components';
import { BlogCard } from '@/componentsLibrary';
import blogCardsData from '@/config/blogCardsData';
import { dictionary, linksConstants } from '@/types/constants';

import {
    BlogCardsContainer,
    ButtonContainer,
    ComponentContainer,
    ContentContainer,
    Title,
} from './styles';

const { OUR_BLOG, LEARN_MORE } = dictionary;
const { BLOG_PAGE } = linksConstants;
const OurBlogMobile = () => {
    const { t } = useTranslation();
    return (
        <ComponentContainer>
            <ContentContainer>
                <Title>{t(OUR_BLOG)}</Title>
                <BlogCardsContainer>
                    {blogCardsData.slice(0, 3).map((data, index) => {
                        return (
                            <BlogCard
                                key={index}
                                settings={{ type: 'without description' }}
                                content={data}
                            />
                        );
                    })}
                </BlogCardsContainer>
                <ButtonContainer>
                    <Link to={BLOG_PAGE}>
                        <DefaultButton>{t(LEARN_MORE)}</DefaultButton>
                    </Link>
                </ButtonContainer>
            </ContentContainer>
        </ComponentContainer>
    );
};

export default OurBlogMobile;
