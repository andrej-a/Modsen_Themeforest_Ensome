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
}

const DropDownMenuList = ({ settings }: DropDownMenuListProps) => {
    return (
        <DropDownMenuListWrapper>
            {settings.map(({ linksTitles, linksPaths }) => {
                return (
                    <DropDownMenuItem
                        category={linksTitles}
                        links={linksPaths}
                    />
                );
            })}
        </DropDownMenuListWrapper>
    );
};

export default DropDownMenuList;
