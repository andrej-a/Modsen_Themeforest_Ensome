import React from 'react';

import categories from '@/config/categories';

import CategoryItem from './Accordeon';
import { CategoriesWrapper } from './styles';

const Categories = () => {
    return (
        <CategoriesWrapper>
            {categories.map(({ theme, description }) => {
                return <CategoryItem theme={theme} description={description} />;
            })}
        </CategoriesWrapper>
    );
};

export default Categories;
