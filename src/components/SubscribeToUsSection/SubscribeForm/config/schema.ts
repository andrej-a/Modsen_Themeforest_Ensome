import * as yup from 'yup';

import { valuesOfTheSettings } from '@/types/constants';

const { INPUT_ERROR, CORRECT_EMAIL_ERROR } = valuesOfTheSettings;

export const schema = yup.object({
    email: yup.string().required(INPUT_ERROR).email(CORRECT_EMAIL_ERROR),
});
