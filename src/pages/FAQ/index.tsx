import React from 'react';

import {
    ContactUsSection,
    Content,
    DarkFooter,
    FAQMainSection,
    Header,
    SubscribeSection,
} from '@/components';

import { Container } from './styles';

const FAQ = () => {
    return (
        <Container>
            <Header background="primary">
                <Content type="primary" />
            </Header>
            <FAQMainSection />

            <ContactUsSection />
            <SubscribeSection type="primary" />
            <DarkFooter />
        </Container>
    );
};

export default FAQ;
