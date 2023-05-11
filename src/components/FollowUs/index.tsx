import React from 'react';
import { useTranslation } from 'react-i18next';

import { dictionary } from '@/types/constants';

import SocialLinks from '../DarkHeader/SocialLinks';
import { FollowUsContainer, Title } from './styles';

const { FOLLOW_US } = dictionary;
interface IFollowUs {
    type: 'light' | 'dark';
}
const FollowUs = ({ type }: IFollowUs) => {
    const { t } = useTranslation();
    return (
        <FollowUsContainer>
            <Title type={type}>{t(FOLLOW_US)}</Title>
            <SocialLinks />
        </FollowUsContainer>
    );
};

export default FollowUs;
