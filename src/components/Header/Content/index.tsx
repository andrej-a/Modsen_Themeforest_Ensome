import React from 'react';
import { useTranslation } from 'react-i18next';

import HeaderLogo from '@/assets/images/logo/headerLogo.png';
import HeaderLogoWhite from '@/assets/images/logo/headerLogoWhite.png';
import { LogoComponent } from '@/components/';
import { HeaderContentProps } from '@/types/componentsOptions';
import { valuesOfTheSettings } from '@/types/constants';

import VideoPlayerHandler from '../VideoPlayerHandler';
import { ContentContainer, MenuContainer, MenuItem } from './styles';

const { HOME, SOLUTIONS, PAGES, ELEMENTS, BLOG, CONTACT, WATCH_THE_DEMO } =
    valuesOfTheSettings;

const Content = ({ type }: HeaderContentProps) => {
    const { t } = useTranslation();
    return (
        <ContentContainer>
            <LogoComponent
                source={type === 'secondary' ? HeaderLogoWhite : HeaderLogo}
            />
            <MenuContainer>
                <MenuItem type={type}>{t(HOME)}</MenuItem>
                <MenuItem type={type}>{t(SOLUTIONS)}</MenuItem>
                <MenuItem type={type}>{t(PAGES)}</MenuItem>
                <MenuItem type={type}>{t(ELEMENTS)}</MenuItem>
                <MenuItem type={type}>{t(BLOG)}</MenuItem>
                <MenuItem type={type}>{t(CONTACT)}</MenuItem>
            </MenuContainer>
            <VideoPlayerHandler type={type} />
        </ContentContainer>
    );
};

export default Content;
