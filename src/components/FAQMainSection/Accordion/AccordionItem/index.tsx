import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import ClosedAccordion from '@/assets/images/logo/closed_accordion.png';
import OpenedAccordion from '@/assets/images/logo/opened_accordion.png';
import { ImageComponent } from '@/components';
import { IAccordionCard } from '@/types/componentsOptions';
import { dictionary } from '@/types/constants';

import { AccodrionItem, Answer, Question, Text } from './styles';

const { BENEFITS_DESCRIPTION } = dictionary;

const AccordionCard = ({ content }: IAccordionCard) => {
    const { t } = useTranslation();
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState('0');
    const ref = useRef<HTMLDivElement>(null);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        setHeight(`${ref.current?.scrollHeight}px`);
    }, []);

    return (
        <AccodrionItem>
            <Question onClick={toggleAccordion}>
                <Text isExpanded={isExpanded}>
                    {' '}
                    {t(content)}{' '}
                    <ImageComponent
                        source={isExpanded ? OpenedAccordion : ClosedAccordion}
                    />
                </Text>
            </Question>
            <Answer currentHeight={height} isExpanded={isExpanded} ref={ref}>
                {t(BENEFITS_DESCRIPTION)}
            </Answer>
        </AccodrionItem>
    );
};

export default AccordionCard;
