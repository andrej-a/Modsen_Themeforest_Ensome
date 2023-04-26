import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import ReadMoreArrow from '@/assets/images/logo/readmore.png';
import { ImageComponent } from '@/components';
import { useAppDispatch } from '@/hooks/useStore';
import { dictionary } from '@/types/constants';

import { ReadMoreContainer } from './styles';

const { READ_MORE } = dictionary;

type ReadMoreLinkProps = {
    link: string;
};

const ReadMoreComponent = ({ link }: ReadMoreLinkProps) => {
    const { t } = useTranslation();

    return (
        <ReadMoreContainer data-test="readMore">
            <Link to={`/${t(link)}`}>{t(READ_MORE)}</Link>
            <ImageComponent source={ReadMoreArrow} />
        </ReadMoreContainer>
    );
};

export default ReadMoreComponent;
