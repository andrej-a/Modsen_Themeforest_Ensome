import React from 'react';
import { useTranslation } from 'react-i18next';

import { SliderComponent } from '@/components';
import { BlogCard } from '@/componentsLibrary';
import blogCardsData from '@/config/blogCardsData';
import { valuesOfTheSettings } from '@/types/constants';

import { OurBlogContainer } from './styles';

const { OUR_BLOG } = valuesOfTheSettings;
const OurBlogSection = () => {
    const { t } = useTranslation();
    return (
        <OurBlogContainer>
            <SliderComponent title={t(OUR_BLOG)}>
                {blogCardsData.map(
                    ({
                        id,
                        author,
                        image,
                        countOfTheViews,
                        publishDate,
                        blogTitle,
                        firstContentPart,
                        separateParagraph,
                        secondContentPart,
                        share,
                        tagsTitle,
                        tagsArray,
                    }) => {
                        return (
                            <BlogCard
                                settings={{ type: 'small' }}
                                content={{
                                    id,
                                    author,
                                    image,
                                    countOfTheViews,
                                    publishDate,
                                    blogTitle,
                                    firstContentPart,
                                    separateParagraph,
                                    secondContentPart,
                                    share,
                                    tagsTitle,
                                    tagsArray,
                                }}
                            />
                        );
                    },
                )}
            </SliderComponent>
        </OurBlogContainer>
    );
};

export default OurBlogSection;
