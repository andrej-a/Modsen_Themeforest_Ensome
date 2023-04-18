import React from 'react';

import { Tag } from '@/componentsLibrary';
import tags from '@/config/tags';
import useFilters from '@/hooks/useFilters';

import { TagsContainer } from './styles';

const Tags = () => {
    const allTags = ['All topics', ...tags];
    const { activeFilters, onHandleActiveFilters } = useFilters();
    return (
        <TagsContainer>
            {allTags.map(tag => {
                return (
                    <Tag
                        onClick={onHandleActiveFilters(tag)}
                        isActive={activeFilters.includes(tag)}
                        key={tag}
                    >
                        {tag}
                    </Tag>
                );
            })}
        </TagsContainer>
    );
};

export default Tags;
