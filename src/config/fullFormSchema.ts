import * as yup from 'yup';

import { dictionary, numberEnums } from '@/types/constants';

const { INPUT_ERROR, CORRECT_EMAIL_ERROR, MINIMUM_LETTERS_ERROR } = dictionary;

const {
    MINIMUM_LETTERS_OF_THEME_INPUT,
    MINIMUM_LETTERS_OF_NAME_INPUT,
    MINIMUM_LETTERS_OF_MESSAGE_INPUT,
} = numberEnums;

export const schema = yup.object({
    email: yup.string().required(INPUT_ERROR).email(CORRECT_EMAIL_ERROR),
    name: yup
        .string()
        .required(INPUT_ERROR)
        .min(MINIMUM_LETTERS_OF_NAME_INPUT, MINIMUM_LETTERS_ERROR),
    theme: yup
        .string()
        .required(INPUT_ERROR)
        .min(MINIMUM_LETTERS_OF_THEME_INPUT, MINIMUM_LETTERS_ERROR),
    message: yup
        .string()
        .required(INPUT_ERROR)
        .min(MINIMUM_LETTERS_OF_MESSAGE_INPUT, MINIMUM_LETTERS_ERROR),
});
