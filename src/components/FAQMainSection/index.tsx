import React from 'react';
import { useTranslation } from 'react-i18next';

import { BreadCrumbs } from '@/components';
import { valuesOfTheSettings } from '@/types/constants';

import Accordion from './Accordion';
import {
    BreadCrumbsWrapper,
    Container,
    Content,
    Description,
    DescriptionWrapper,
    SubTitle,
    Title,
} from './styles';

const { FAQS_SUBTITLE, FAQ_TITLE, FAQ_DESCRIPTION } = valuesOfTheSettings;

const FAQMainSection = () => {
    const { t } = useTranslation();
    return (
        <Container>
            <Content>
                <BreadCrumbsWrapper>
                    <BreadCrumbs linkColor="grey" crumbColor="black" />
                </BreadCrumbsWrapper>
                <DescriptionWrapper>
                    <SubTitle>{FAQS_SUBTITLE}</SubTitle>
                    <Title>{t(FAQ_TITLE)}</Title>
                    <Description>{t(FAQ_DESCRIPTION)}</Description>
                </DescriptionWrapper>
            </Content>
            <Accordion />
        </Container>
    );
};

export default FAQMainSection;
