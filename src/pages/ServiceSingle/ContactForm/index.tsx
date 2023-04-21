import React from 'react';

import ContactInformation from './ContactInformation';
import Form from './Form';
import { ComponentContainer, ContentContainer } from './styles';

const ContactFormComponent = () => {
    return (
        <ComponentContainer>
            <ContentContainer>
                <ContactInformation />
                <Form />
            </ContentContainer>
        </ComponentContainer>
    );
};

export default ContactFormComponent;
