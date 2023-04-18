import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ReadMoreArrow from '@/assets/images/logo/readmore.png';
import { ImageComponent } from '@/components';
import { Tag } from '@/componentsLibrary';
import { IBlogCard } from '@/config/blogCardsData';
import { useAppDispatch } from '@/hooks/useStore';
import { setCurrentBlog, setTagsOfCurrentBlog } from '@/store/slices/blog';
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

const BlogCard = memo(({ settings, content }: BlogCardProps) => {
    const { type } = settings;
    const { image, publishDate, blogTitle, firstContentPart, tagsArray } =
        content;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const onSetSingleBlog = (content: IBlogCard) => () => {
        dispatch(setCurrentBlog(content));
        dispatch(setTagsOfCurrentBlog(tagsArray));
    };
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
                    <ReadMore type={type} onClick={onSetSingleBlog(content)}>
                        <Link to={`/${t(blogTitle)}`}>{t(READ_MORE)}</Link>
                        <ImageComponent source={ReadMoreArrow} />
                    </ReadMore>
                    <TagsContainer type={type}>
                        {tagsArray.map(tag => {
                            return <Tag key={tag}>{tag}</Tag>;
                        })}
                    </TagsContainer>
                </DescriptionContainer>
            </BlogCardContent>
        </BlogCardContainer>
    );
});

export default BlogCard;
