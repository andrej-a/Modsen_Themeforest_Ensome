import React from 'react';

import CategoryItem from './Accordeon';
import { CategoriesWrapper } from './styles';

export interface IListItem {
    title: string;
    description: string;
}

export interface ICategories {
    content: IListItem[];
}

const Categories = ({ content }: ICategories) => {
    return (
        <CategoriesWrapper>
            {content.map(({ title, description }) => {
                return <CategoryItem theme={title} description={description} />;
            })}
        </CategoriesWrapper>
    );
};

export default Categories;
