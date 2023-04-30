import React from 'react';

import { ILink } from '@/config/links';

import DropDownMenuItem from './DropDownMenuItem';
import { DropDownMenuListWrapper } from './styles';

export interface ISettings {
    linksTitles: string;
    linksPaths: ILink[];
}
interface DropDownMenuListProps {
    settings: ISettings[];
    type: 'light' | 'dark';
    onHandleMenu?: (status: boolean) => () => void;
}

const DropDownMenuList = ({
    settings,
    type,
    onHandleMenu,
}: DropDownMenuListProps) => {
    return (
        <DropDownMenuListWrapper>
            {settings.map(({ linksTitles, linksPaths }, index) => {
                return (
                    <DropDownMenuItem
                        onHandleMenu={onHandleMenu}
                        key={index}
                        category={linksTitles}
                        links={linksPaths}
                        type={type}
                    />
                );
            })}
        </DropDownMenuListWrapper>
    );
};

export default DropDownMenuList;
