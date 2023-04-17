import * as yup from 'yup';

import { valuesOfTheSettings } from '@/types/constants';

const { INPUT_ERROR } = valuesOfTheSettings;

export const schema = yup.object({
    search: yup.string().required(INPUT_ERROR).min(2),
});
