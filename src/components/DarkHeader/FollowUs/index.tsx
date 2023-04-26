import React from 'react';
import { useTranslation } from 'react-i18next';

import { dictionary } from '@/types/constants';

import SocialLinks from '../SocialLinks';
import { FollowUsContainer, Title } from './styles';

const { FOLLOW_US } = dictionary;
const FollowUs = () => {
    const { t } = useTranslation();
    return (
        <FollowUsContainer>
            <Title>{t(FOLLOW_US)}</Title>
            <SocialLinks />
        </FollowUsContainer>
    );
};

export default FollowUs;
