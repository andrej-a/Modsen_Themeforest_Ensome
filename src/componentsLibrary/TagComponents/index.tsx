import React, { memo } from 'react';

import { TagComponent } from './styles';
import ITagProps from './types';

const Tag = memo(({ isActive, children, ...rest }: ITagProps) => {
    return (
        <TagComponent isActive={isActive} {...rest}>
            {children}
        </TagComponent>
    );
});

export default Tag;
