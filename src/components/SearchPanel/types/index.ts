import {
    FieldErrors,
    SubmitHandler,
    UseFormHandleSubmit,
    UseFormRegister,
} from 'react-hook-form';

import { TSearchField } from '@/types/componentsOptions';

export default interface ISearchPanelProps {
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
