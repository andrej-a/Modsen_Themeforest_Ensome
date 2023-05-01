import React, { memo } from 'react';

import { ICategories } from '../types';
import CategoryItem from './Accordeon';
import { CategoriesWrapper } from './styles';

const Categories = memo(({ content }: ICategories) => {
    return (
        <CategoriesWrapper>
            {content.map(({ title, description }, index) => {
                return (
                    <CategoryItem
                        key={index}
                        theme={title}
                        description={description}
                    />
                );
            })}
        </CategoriesWrapper>
    );
});

export default Categories;
