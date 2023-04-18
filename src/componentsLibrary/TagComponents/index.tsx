import React from 'react';

import { TagProps } from '@/types/componentsOptions';

import { TagComponent } from './styles';

const Tag = ({ isActive, children, ...rest }: TagProps) => {
    return (
        <TagComponent isActive={isActive} {...rest}>
            {children}
        </TagComponent>
    );
};

export default Tag;
