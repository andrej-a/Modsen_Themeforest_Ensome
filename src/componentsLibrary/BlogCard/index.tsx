import React from 'react';
import { useTranslation } from 'react-i18next';

import ReadMoreArrow from '@/assets/images/logo/readmore.png';
import { ImageComponent } from '@/components';
import { valuesOfTheSettings } from '@/types/constants';
import { cutString } from '@/utils/cutString';

import {
    BlogCardContainer,
    BlogCardContent,
    CardTitle,
    DescriptionContainer,
    ImageContainer,
    MainTextSection,
    PublishDate,
    ReadMore,
    Tag,
    TagsContainer,
} from './styles';

type BlogCardProps = {
    settings: {
        type:
            | 'big'
            | 'medium'
            | 'small'
            | 'right text'
            | 'without description'
            | 'no img';
    };
    content: {
        id: string;
        author: string;
        image: string;
        countOfTheViews: string;
        publishDate: string;
        blogTitle: string;
        firstContentPart: string;
        separateParagraph: string;
        secondContentPart: string;
        share: string;
        tagsTitle: string;
        tagsArray: string[];
    };
};
const { READ_MORE } = valuesOfTheSettings;
const BlogCard = ({ settings, content }: BlogCardProps) => {
    const { type } = settings;
    const { image, publishDate, blogTitle, firstContentPart, tagsArray } =
        content;
    const { t } = useTranslation();
    return (
        <BlogCardContainer>
            <BlogCardContent type={type}>
                <ImageContainer type={type}>
                    <ImageComponent source={image} />
                </ImageContainer>
                <DescriptionContainer type={type}>
                    <PublishDate>{t(publishDate)}</PublishDate>
                    <CardTitle type={type}>{t(blogTitle)}</CardTitle>
                    <MainTextSection type={type}>
                        {cutString(t(firstContentPart))}
                    </MainTextSection>
                    <ReadMore type={type}>
                        {t(READ_MORE)}
                        <ImageComponent source={ReadMoreArrow} />
                    </ReadMore>
                    <TagsContainer type={type}>
                        {tagsArray.map(tag => {
                            return <Tag>{tag}</Tag>;
                        })}
                    </TagsContainer>
                </DescriptionContainer>
            </BlogCardContent>
        </BlogCardContainer>
    );
};

export default BlogCard;
