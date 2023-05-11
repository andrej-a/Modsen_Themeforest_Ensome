import React from 'react';

import Form from '@/components/Form';

import ContactInformation from './ContactInformation';
import { ComponentContainer, ContentContainer } from './styles';

const ContactFormComponent = () => {
    return (
        <ComponentContainer>
            <ContentContainer>
                <ContactInformation />
                <Form type="group" />
            </ContentContainer>
        </ComponentContainer>
    );
};

export default ContactFormComponent;
