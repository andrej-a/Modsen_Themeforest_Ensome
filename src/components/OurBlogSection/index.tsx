import React from 'react';

import { SliderComponent } from '@/components';
import { BlogCard } from '@/componentsLibrary';
import blogCardsData from '@/config/blogCardsData';

import { OurBlogContainer } from './styles';

type Props = {};

const OurBlogSection = (props: Props) => {
    return (
        <OurBlogContainer>
            <SliderComponent title="Our blog">
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
