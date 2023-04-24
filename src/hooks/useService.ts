import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Schema } from 'yup';

import { serviceSelector } from '@/store/selectors/selectors';
import { setSearchingValue, setServicePage } from '@/store/slices/serviceSlice';
import { TSearchField } from '@/types/componentsOptions';
import { TService } from '@/types/IService';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAppDispatch, useAppSelector } from './useStore';

const useService = (schema?: Schema<TSearchField>) => {
    const dispatch = useAppDispatch();
    const { searchingValue, currentLink, services } =
        useAppSelector(serviceSelector);
    const history = useNavigate();
    const { t } = useTranslation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm<TSearchField>({
        resolver: yupResolver(schema),
        defaultValues: { search: '' },
    });

    useEffect(() => {
        setValue('search', searchingValue);
    }, [searchingValue]);

    const findPageAndSetToStore = () => {
        services.forEach(serv => {
            if (t(serv.title) === currentLink) {
                dispatch(setServicePage(serv));
            }
        });
    };

    const handleChange: SubmitHandler<{ search: string }> = ({ search }) => {
        dispatch(setSearchingValue(search));
    };

    const onHandleSubmit: SubmitHandler<{ search: string }> = ({ search }) => {
        findPageAndSetToStore();
        history(`/service/${currentLink}`);
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

export default useService;
