import React from 'react';
import { useTranslation } from 'react-i18next';

import Form from '@/components/Form';
import { dictionary } from '@/types/constants';

import { FormContainer, Title } from './styles';

const { CONTACT_US } = dictionary;

const ContactUsForm = () => {
    const { t } = useTranslation();
    return (
        <FormContainer>
            <Title>{t(CONTACT_US)}</Title>
            <Form type="column" />
        </FormContainer>
    );
};

export default ContactUsForm;
