import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { dictionary } from '@/types/constants';

import SocialLinks from '../DarkHeader/SocialLinks';
import { FollowUsContainer, Title } from './styles';
import IFollowUs from './types';

const { FOLLOW_US } = dictionary;
const FollowUs = memo(({ type }: IFollowUs) => {
    const { t } = useTranslation();
    return (
        <FollowUsContainer>
            <Title type={type}>{t(FOLLOW_US)}</Title>
            <SocialLinks />
        </FollowUsContainer>
    );
});

export default FollowUs;
