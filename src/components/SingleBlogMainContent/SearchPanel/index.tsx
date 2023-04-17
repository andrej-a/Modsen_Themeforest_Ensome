import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useSearch from '@/hooks/useSearch';

import { schema } from './config/schema';
import ElasticContainerItems from './ElastickSearch';
import {
    SearchForm,
    SearchInput,
    SubmitButton,
    ValidationError,
} from './styles';

const SearchPanel = () => {
    const [isVisibleElasticSearch, setIsVisibleElasticSearch] = useState(false);

    const { t } = useTranslation();
    const { register, handleSubmit, errors, handleChange, onHandleSubmit } =
        useSearch(schema);
    const onSetIsVisibleElasticSearch = (status: boolean) => () => {
        setIsVisibleElasticSearch(status);
    };

    return (
        <SearchForm onSubmit={handleSubmit(onHandleSubmit)}>
            <SearchInput
                {...register('search', {
                    onChange: handleSubmit(handleChange),
                })}
                onFocus={onSetIsVisibleElasticSearch(true)}
                isError={!!Object.keys(errors).length}
                type="text"
                placeholder="Search"
            />
            <ValidationError>{t(errors.search?.message!)}</ValidationError>
            <SubmitButton
                disabled={!!Object.keys(errors).length}
                type="submit"
                value="Search"
            />
            <ElasticContainerItems
                isVisible={isVisibleElasticSearch}
                onSetIsVisible={onSetIsVisibleElasticSearch}
            />
        </SearchForm>
    );
};

export default SearchPanel;
