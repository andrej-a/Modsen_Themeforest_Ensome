import React from 'react';
import {
    FieldErrors,
    SubmitHandler,
    UseFormHandleSubmit,
    UseFormRegister,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { TSearchField } from '@/types/componentsOptions';

import {
    SearchForm,
    SearchInput,
    SubmitButton,
    ValidationError,
} from './styles';

interface SearchPanelProps {
    children: React.ReactNode;
    settings: {
        register: UseFormRegister<TSearchField>;
        handleSubmit: UseFormHandleSubmit<TSearchField>;
        errors: FieldErrors<TSearchField>;
        handleChange: SubmitHandler<TSearchField>;
        onHandleSubmit: SubmitHandler<TSearchField>;
        onSetIsVisibleElasticSearch: (status: boolean) => () => void;
    };
}

const SearchPanel = ({
    children,
    settings: {
        register,
        handleSubmit,
        errors,
        handleChange,
        onHandleSubmit,
        onSetIsVisibleElasticSearch,
    },
}: SearchPanelProps) => {
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
};

export default SearchPanel;
