import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ReadMoreArrow from '@/assets/images/logo/readmore.png';
import { ImageComponent } from '@/components';
import { dictionary } from '@/types/constants';

import { ReadMoreContainer } from './styles';
import IReadMoreLinkProps from './types';

const { READ_MORE } = dictionary;

const ReadMoreComponent = memo(({ link }: IReadMoreLinkProps) => {
    const { t } = useTranslation();

    return (
        <ReadMoreContainer data-test="readMore">
            <Link to={`/${link}`}>{t(READ_MORE)}</Link>
            <ImageComponent source={ReadMoreArrow} />
        </ReadMoreContainer>
    );
});

export default ReadMoreComponent;
