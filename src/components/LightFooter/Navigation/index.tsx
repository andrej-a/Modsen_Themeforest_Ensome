import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { dictionary } from '@/types/constants';

import navigation from './config';
import { NavigationContainer, NavigationItem, Title } from './styles';

const { SERVICE } = dictionary;

const Navigation = () => {
    const { t } = useTranslation();
    return (
        <NavigationContainer>
            {navigation.map(({ title, links }) => {
                return (
                    <NavigationItem key={title}>
                        <Title>{t(title)}</Title>
                        {links.map(({ to, link }) => {
                            return (
                                <Link key={to} to={link}>
                                    {t(to)}
                                </Link>
                            );
                        })}
                    </NavigationItem>
                );
            })}
        </NavigationContainer>
    );
};

export default Navigation;
