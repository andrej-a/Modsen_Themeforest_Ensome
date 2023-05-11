import React, { useState } from 'react';

import categories from '@/config/categories';
import useSearch from '@/hooks/useSearch';

import { schema } from '../../config/schema';
import SearchPanel from '../SearchPanel';
import Categories from './Categories';
import ElasticContainerItems from './ElastickSearch';
import PopularPosts from './PopularPosts';
import RelatedPosts from './RelatedPosts';
import {
    LeftSideBar,
    MainContent,
    MainContentContainer,
    RightSideBar,
} from './styles';
import Tags from './TagsSection';
import Text from './Text';

const MainContentSection = () => {
    const [isVisibleElasticSearch, setIsVisibleElasticSearch] = useState(false);
    const { register, handleSubmit, errors, handleChange, onHandleSubmit } =
        useSearch(schema);
    const onSetIsVisibleElasticSearch = (status: boolean) => () => {
        setIsVisibleElasticSearch(status);
    };

    return (
        <MainContentContainer>
            <MainContent>
                <LeftSideBar>
                    <Text />
                    <RelatedPosts />
                </LeftSideBar>
                <RightSideBar>
                    <SearchPanel
                        settings={{
                            register,
                            handleSubmit,
                            errors,
                            handleChange,
                            onHandleSubmit,
                            onSetIsVisibleElasticSearch,
                        }}
                    >
                        <ElasticContainerItems
                            isVisible={isVisibleElasticSearch}
                            onSetIsVisible={onSetIsVisibleElasticSearch}
                        />
                    </SearchPanel>
                    <PopularPosts />
                    <Categories content={categories} />
                    <Tags />
                </RightSideBar>
            </MainContent>
        </MainContentContainer>
    );
};

export default MainContentSection;
