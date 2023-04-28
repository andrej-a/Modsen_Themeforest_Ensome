import React from 'react';
import { useTranslation } from 'react-i18next';

import { SliderComponent } from '@/components';
import { BlogCard } from '@/componentsLibrary';
import blogCardsData from '@/config/blogCardsData';
import { dictionary } from '@/types/constants';

import { OurBlogContainer } from './styles';

const { OUR_BLOG } = dictionary;
const OurBlogSection = () => {
    const { t } = useTranslation();
    return (
        <OurBlogContainer>
            <SliderComponent
                description=""
                settings={{
                    isButtonsControls: true,
                    isDescription: false,
                    contentPosition: 'space-between',
                }}
                innerControls={{
                    isInclude: false,
                    cardsSize: 275,
                    innerGap: 28,
                    innerPadding: 44,
                    innerTransform: 300,
                }}
                countOfTheCards={3}
                title={t(OUR_BLOG)}
            >
                {blogCardsData.map(data => {
                    const { publishDate, blogTitle, firstContentPart } = data;
                    return (
                        <BlogCard
                            settings={{ type: 'small' }}
                            content={{
                                ...data,
                                publishDate: t(publishDate),
                                blogTitle: t(blogTitle),
                                firstContentPart: t(firstContentPart),
                            }}
                        />
                    );
                })}
            </SliderComponent>
        </OurBlogContainer>
    );
};

export default OurBlogSection;
