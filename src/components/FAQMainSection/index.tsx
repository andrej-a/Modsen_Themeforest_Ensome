import React from 'react';

import { PageTitle } from '@/componentsLibrary';
import { valuesOfTheSettings } from '@/types/constants';

import Accordion from './Accordion';
import { Container } from './styles';

const { FAQS_SUBTITLE, FAQ_TITLE, FAQ_DESCRIPTION } = valuesOfTheSettings;

const FAQMainSection = () => {
    return (
        <Container>
            <PageTitle
                subTitle={FAQS_SUBTITLE}
                title={FAQ_TITLE}
                description={FAQ_DESCRIPTION}
            />
            <Accordion />
        </Container>
    );
};

export default FAQMainSection;
