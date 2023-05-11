import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import additionalLinks from './config/additionalLinks';
import { Content, ContentContainer, LinkToPage } from './styles';

interface IAdditionapPages {
    isShow: boolean;
    onHandleShowAdditionalPages: (status: boolean) => () => void;
}

const AdditionalContent = ({
    isShow,
    onHandleShowAdditionalPages,
}: IAdditionapPages) => {
    const { t } = useTranslation();
    return (
        <ContentContainer
            isShow={isShow}
            onMouseLeave={onHandleShowAdditionalPages(false)}
        >
            <Content>
                {additionalLinks.map(({ link, title }) => {
                    return (
                        <NavLink key={title} to={link}>
                            {({ isActive }) => (
                                <LinkToPage isActive={isActive}>
                                    {t(title)}
                                </LinkToPage>
                            )}
                        </NavLink>
                    );
                })}
            </Content>
        </ContentContainer>
    );
};

export default AdditionalContent;
