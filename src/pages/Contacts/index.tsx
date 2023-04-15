import React from 'react';

import { ContactsSection, Content, Header } from '@/components';

import { ContactsPageContainer } from './styles';

const ContactsPage = () => {
    return (
        <ContactsPageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <ContactsSection />
        </ContactsPageContainer>
    );
};

export default ContactsPage;
