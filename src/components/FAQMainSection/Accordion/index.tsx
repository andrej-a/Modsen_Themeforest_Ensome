import React from 'react';

import faqData from '@/config/faq';

import AccordionCard from './AccordionItem';
import { AccordionContainer } from './styles';

const Accordion = () => {
    return (
        <AccordionContainer>
            {faqData.map((question, index) => {
                return <AccordionCard key={index} content={question} />;
            })}
        </AccordionContainer>
    );
};

export default Accordion;
