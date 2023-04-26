import React from 'react';

import { PageTitle } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { dictionary, size } from '@/types/constants';

import Accordion from './Accordion';
import { Container } from './styles';

const { FAQS_SUBTITLE, FAQ_TITLE, FAQ_DESCRIPTION, FAQ_DESCRIPTION_MOBILE } =
    dictionary;

const { tablet } = size;
const FAQMainSection = () => {
    const { isMobile } = useMobile(tablet);
    return (
        <Container>
            <PageTitle
                subTitle={FAQS_SUBTITLE}
                size="low"
                title={FAQ_TITLE}
                description={
                    isMobile ? FAQ_DESCRIPTION_MOBILE : FAQ_DESCRIPTION
                }
            />
            <Accordion />
        </Container>
    );
};

export default FAQMainSection;
