import React, { useState } from 'react';

import SearchPanel from '@/components/SearchPanel';
import { schema } from '@/config/schema';
import useService from '@/hooks/useService';
import ServiceElasticSearch from '@/pages/ServiceSingle/ElastickSearch';

const SearchServices = () => {
    const [isVisibleElasticSearch, setIsVisibleElasticSearch] = useState(false);
    const onSetIsVisibleElasticSearch = (status: boolean) => () => {
        setIsVisibleElasticSearch(status);
    };
    const { register, handleSubmit, errors, handleChange, onHandleSubmit } =
        useService(schema);

    return (
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
            <ServiceElasticSearch
                isVisible={isVisibleElasticSearch}
                onSetIsVisible={onSetIsVisibleElasticSearch}
            />
        </SearchPanel>
    );
};

export default SearchServices;
