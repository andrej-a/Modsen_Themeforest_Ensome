import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactSVG } from 'react-svg';

import Author from '@/assets/images/logo/author.png';
import Calendar from '@/assets/images/logo/calendar.png';
import Sharing from '@/assets/images/logo/sharing.png';
import Tags from '@/assets/images/logo/tags.png';
import Views from '@/assets/images/logo/views.png';
import { ImageComponent } from '@/components';
import { Tag } from '@/componentsLibrary/BlogCard/styles';
import { blogLogoArray } from '@/config/logoLinks';
import { useAppSelector } from '@/hooks/useStore';
import { blogSelector } from '@/store/selectors/selectors';

import {
    ImageWrapper,
    MetaDataContainer,
    MetaDataItem,
    PostContent,
    PostTitle,
    SelectedText,
    SelectedTextContainer,
    TextWrapper,
} from './styles';

const Text = () => {
    const {
        currentBlog: {
            image,
            author,
            publishDate,
            blogTitle,
            firstContentPart,
            separateParagraph,
            secondContentPart,
            countOfTheViews,
            share,
            tagsTitle,
            tagsArray,
        },
    } = useAppSelector(blogSelector);
    const { t } = useTranslation();
    return (
        <TextWrapper>
            <ImageWrapper>
                <ImageComponent source={image} />
            </ImageWrapper>
            <MetaDataContainer>
                <MetaDataItem>
                    <ImageComponent source={Calendar} />
                    {t(publishDate)}
                </MetaDataItem>
                <MetaDataItem>
                    <ImageComponent source={Author} />
                    {author}
                </MetaDataItem>
            </MetaDataContainer>
            <PostTitle>{t(blogTitle)}</PostTitle>
            <PostContent
                dangerouslySetInnerHTML={{
                    __html: t(firstContentPart),
                }}
            />
            <SelectedTextContainer>
                <SelectedText>{t(separateParagraph)}</SelectedText>
            </SelectedTextContainer>
            <PostContent
                dangerouslySetInnerHTML={{
                    __html: t(secondContentPart),
                }}
            />
            <MetaDataContainer>
                <MetaDataItem>
                    <ImageComponent source={Views} />
                    {t(countOfTheViews)}
                </MetaDataItem>
                <MetaDataItem>
                    <ImageComponent source={Sharing} />
                    {t(share)}
                    {blogLogoArray.map(logo => {
                        return <ReactSVG src={logo} />;
                    })}
                </MetaDataItem>
                <MetaDataItem>
                    <ImageComponent source={Tags} />
                    {t(tagsTitle)}
                    {tagsArray.map(tag => {
                        return <Tag>{tag}</Tag>;
                    })}
                </MetaDataItem>
            </MetaDataContainer>
        </TextWrapper>
    );
};

export default Text;
