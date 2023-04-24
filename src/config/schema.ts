import * as yup from 'yup';

import { dictionary } from '@/types/constants';

const { INPUT_ERROR } = dictionary;

export const schema = yup.object({
    search: yup.string().required(INPUT_ERROR),
});
