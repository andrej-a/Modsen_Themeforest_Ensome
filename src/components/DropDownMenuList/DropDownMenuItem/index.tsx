import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import MenuArrowRightDark from '@/assets/images/logo/contacts_arrow.png';
import MenuArrowRight from '@/assets/images/logo/drop_down_arrow_right.png';
import DropDownDarkArrow from '@/assets/images/logo/drop_down_dark_arrow.png';
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
    type: string;
    onHandleMenu?: (status: boolean) => () => void;
};

const DropDownMenuItem = ({
    category,
    links,
    type,
    onHandleMenu,
}: DropDownMenuItemProps) => {
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
            <MenuTrigger
                type={type}
                isExpanded={isExpanded}
                onClick={toggleAccordion}
            >
                {t(category)}
                <ImageComponent
                    source={type === 'dark' ? DropDownDarkArrow : DropDownArrow}
                />
            </MenuTrigger>
            <MenuContent
                ref={ref}
                currentHeight={height}
                isExpanded={isExpanded}
            >
                {links.map(({ id, link, title }) => {
                    return (
                        <LinkToPage
                            onClick={
                                onHandleMenu ? onHandleMenu(false) : () => {}
                            }
                            type={type}
                            key={id}
                        >
                            <Link to={link}>{t(title)}</Link>
                            <ImageComponent
                                source={
                                    type === 'dark'
                                        ? MenuArrowRightDark
                                        : MenuArrowRight
                                }
                            />
                        </LinkToPage>
                    );
                })}
            </MenuContent>
        </DropDownContainer>
    );
};

export default DropDownMenuItem;
