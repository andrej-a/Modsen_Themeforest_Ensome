import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Schema } from 'yup';

import { blogSelector } from '@/store/selectors/selectors';
import {
    setTagFromSearchInput,
    setTagsOfCurrentBlog,
} from '@/store/slices/blog';
import { TSearchField } from '@/types/componentsOptions';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from './useStore';

const useSearch = (schema?: Schema<TSearchField>) => {
    const dispatch = useAppDispatch();
    const { tagFromSearchInput } = useAppSelector(blogSelector);

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<TSearchField>({
        resolver: yupResolver(schema),
        defaultValues: { search: tagFromSearchInput },
    });

    useEffect(() => {
        setValue('search', tagFromSearchInput);
    }, [tagFromSearchInput]);

    const handleChange: SubmitHandler<{ search: string }> = ({ search }) => {
        dispatch(setTagFromSearchInput(search));
    };

    const onHandleSubmit: SubmitHandler<{ search: string }> = ({ search }) => {
        dispatch(setTagsOfCurrentBlog([search]));
    };

    return {
        register,
        handleSubmit,
        errors,
        handleChange,
        onHandleSubmit,
        setValue,
    };
};

export default useSearch;
