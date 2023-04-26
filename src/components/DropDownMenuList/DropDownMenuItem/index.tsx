import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import MenuArrowRight from '@/assets/images/logo/drop_down_arrow_right.png';
import DropDownArrow from '@/assets/images/logo/dropdown_arrow.png';
import { ImageComponent } from '@/components';
import { ILink } from '@/config/links';

import {
    DropDownContainer,
    LinkToPage,
    MenuContent,
    MenuTrigger,
} from './styles';

type DropDownMenuItemProps = {
    category: string;
    links: ILink[];
};

const DropDownMenuItem = ({ category, links }: DropDownMenuItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState('0');
    const { t } = useTranslation();
    const ref = useRef<HTMLDivElement>(null);
    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        setHeight(`${ref.current?.scrollHeight}px`);
    }, []);

    return (
        <DropDownContainer>
            <MenuTrigger isExpanded={isExpanded} onClick={toggleAccordion}>
                {t(category)}
                <ImageComponent source={DropDownArrow} />
            </MenuTrigger>
            <MenuContent
                ref={ref}
                currentHeight={height}
                isExpanded={isExpanded}
            >
                {links.map(({ id, link, title }) => {
                    return (
                        <LinkToPage key={id}>
                            <Link to={link}>{t(title)}</Link>
                            <ImageComponent source={MenuArrowRight} />
                        </LinkToPage>
                    );
                })}
            </MenuContent>
        </DropDownContainer>
    );
};

export default DropDownMenuItem;
