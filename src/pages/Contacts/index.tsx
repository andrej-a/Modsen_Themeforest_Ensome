import React from 'react';

import {
    ContactsSection,
    Content,
    DarkFooter,
    Header,
    MapSection,
} from '@/components';

import { ContactsPageContainer } from './styles';

const ContactsPage = () => {
    return (
        <ContactsPageContainer>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <ContactsSection />
            <MapSection />
            <DarkFooter />
        </ContactsPageContainer>
    );
};

export default ContactsPage;
