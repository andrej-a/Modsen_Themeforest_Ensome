import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import { TLinksStack } from '@/types/componentsOptions';
import { capitalize } from '@/utils/cutString';

import { BreadCrumbLink, BreadCrumbsWrapper, FinalyBreadCrumb } from './styles';

type BreadCrumbsProps = {
    linkColor: string;
    crumbColor: string;
};

const BreadCrumbs = ({ linkColor, crumbColor }: BreadCrumbsProps) => {
    const location = useLocation();
    const linksStack: TLinksStack[] = [];
    const crumbs = location.pathname.split('/');
    const { t } = useTranslation();

    crumbs.map((crumb, index) => {
        if (index === 0 && crumb === '') {
            linksStack.push({
                title: t('Home'),
                link: '/',
            });
        } else {
            console.log(capitalize(crumb));
            linksStack.push({
                title: t(capitalize(crumb)),
                link: `${crumb}/`,
            });
        }
    });

    const filteredResult = [linksStack.shift()!, linksStack.pop()!];

    const result = filteredResult.map(({ link, title }, index) => {
        if (index !== filteredResult.length - 1) {
            return index === 0 ? (
                <BreadCrumbLink key={link} linkColor={linkColor}>
                    <Link to={link}>{title} </Link>
                </BreadCrumbLink>
            ) : (
                <BreadCrumbLink key={link} linkColor={linkColor}>
                    | <Link to={link}>{title}</Link>
                </BreadCrumbLink>
            );
        }
        return (
            <FinalyBreadCrumb crumbColor={crumbColor}>
                <FinalyBreadCrumb crumbColor={crumbColor}>|</FinalyBreadCrumb>
                {title}
            </FinalyBreadCrumb>
        );
    });

    return <BreadCrumbsWrapper>{result}</BreadCrumbsWrapper>;
};

export default BreadCrumbs;
