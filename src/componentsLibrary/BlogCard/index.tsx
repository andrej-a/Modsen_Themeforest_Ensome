import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent, ReadMoreComponent } from '@/components';
import { Tag } from '@/componentsLibrary';
import { IBlogCard } from '@/config/blogCardsData';
import { useAppDispatch } from '@/hooks/useStore';
import { setCurrentBlog, setTagsOfCurrentBlog } from '@/store/slices/blog';
import { BlogCardProps } from '@/types/componentsOptions';
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
                        <ReadMoreComponent link={blogTitle} />
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
