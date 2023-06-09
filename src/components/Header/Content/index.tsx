import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { ReactSVG } from 'react-svg';

import HeaderLogo from '@/assets/images/logo/headerLogo.png';
import HeaderLogoWhite from '@/assets/images/logo/headerLogoWhite.png';
import ShowPages from '@/assets/images/logo/showList.svg';
import { LogoComponent } from '@/components/';
import useMobile from '@/hooks/useMobile';
import { HeaderContentProps } from '@/types/componentsOptions';
import { dictionary, size } from '@/types/constants';

import AdditionalContent from '../AdditionalPages';
import VideoPlayerHandler from '../VideoPlayerHandler';
import BurgerMenu from './BurgerMenu';
import headerLinks from './config/headerLinks';
import {
    ContentContainer,
    MenuContainer,
    MenuItem,
    ShowPagesContainer,
} from './styles';

const { PAGES } = dictionary;
const { tablet } = size;
const Content = ({ type }: HeaderContentProps) => {
    const { t } = useTranslation();
    const [isShowAdditionalPages, setIsShowAdditionalPages] = useState(false);
    const { isMobile } = useMobile(tablet);
    const onHandleShowAdditionalPages = (status: boolean) => () => {
        setIsShowAdditionalPages(status);
    };
    return (
        <ContentContainer>
            <AdditionalContent
                onHandleShowAdditionalPages={onHandleShowAdditionalPages}
                isShow={isShowAdditionalPages}
            />
            <LogoComponent
                source={
                    type === 'secondary' && !isMobile
                        ? HeaderLogoWhite
                        : HeaderLogo
                }
            />
            <MenuContainer>
                {headerLinks.map(({ link, title }) => {
                    return (
                        <NavLink key={title} to={link}>
                            {({ isActive }) => {
                                if (t(title) === t(PAGES)) {
                                    return (
                                        <MenuItem
                                            onMouseEnter={onHandleShowAdditionalPages(
                                                true,
                                            )}
                                            isActive={isActive}
                                            type={type}
                                        >
                                            {t(title)}
                                            <ShowPagesContainer>
                                                <ReactSVG src={ShowPages} />
                                            </ShowPagesContainer>
                                        </MenuItem>
                                    );
                                }
                                return (
                                    <MenuItem isActive={isActive} type={type}>
                                        {t(title)}
                                    </MenuItem>
                                );
                            }}
                        </NavLink>
                    );
                })}
            </MenuContainer>
            <BurgerMenu />
            <VideoPlayerHandler type={type} />
        </ContentContainer>
    );
};

export default Content;
