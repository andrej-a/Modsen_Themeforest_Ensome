import React, { memo } from 'react';

import DropDownMenuItem from './DropDownMenuItem';
import { DropDownMenuListWrapper } from './styles';
import { DropDownMenuListProps } from './types';

const DropDownMenuList = memo(
    ({ settings, type, onHandleMenu }: DropDownMenuListProps) => {
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
    },
);

export default DropDownMenuList;
