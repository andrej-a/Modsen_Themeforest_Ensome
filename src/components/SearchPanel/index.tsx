import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
    SearchForm,
    SearchInput,
    SubmitButton,
    ValidationError,
} from './styles';
import ISearchPanelProps from './types';

const SearchPanel = memo(
    ({
        children,
        settings: {
            register,
            handleSubmit,
            errors,
            handleChange,
            onHandleSubmit,
            onSetIsVisibleElasticSearch,
        },
    }: ISearchPanelProps) => {
        const { t } = useTranslation();

        return (
            <SearchForm onSubmit={handleSubmit(onHandleSubmit)}>
                <SearchInput
                    data-test="searchBloByTag"
                    {...register('search', {
                        onChange: handleSubmit(handleChange),
                    })}
                    onFocus={onSetIsVisibleElasticSearch(true)}
                    onBlur={() => {
                        setTimeout(onSetIsVisibleElasticSearch(false), 400);
                    }}
                    isError={!!Object.keys(errors).length}
                    type="text"
                    placeholder="Search"
                    autoComplete="off"
                />
                <ValidationError data-test="tagValidationError">
                    {t(errors.search?.message!)}
                </ValidationError>
                <SubmitButton
                    data-test="submitBlogSearching"
                    disabled={!!Object.keys(errors).length}
                    type="submit"
                    value="Search"
                />
                {children}
            </SearchForm>
        );
    },
);

export default SearchPanel;
