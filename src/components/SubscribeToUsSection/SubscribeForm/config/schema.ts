import * as yup from 'yup';

import { dictionary } from '@/types/constants';

const { INPUT_ERROR, CORRECT_EMAIL_ERROR } = dictionary;

export const schema = yup.object({
    email: yup.string().required(INPUT_ERROR).email(CORRECT_EMAIL_ERROR),
});
