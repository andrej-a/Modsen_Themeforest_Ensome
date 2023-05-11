import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent } from '@/components';
import { logoWithoutOpacityList } from '@/config/clientLogos';
import { dictionary } from '@/types/constants';

import {
    Content,
    ContentContainer,
    CustomersContainer,
    Description,
    DescriptionContainer,
    Title,
} from './styles';

const { OUR_CUSTOMERS, CUSTOMER_DESCRIPTION } = dictionary;

const Overview = () => {
    const { t } = useTranslation();
    return (
        <ContentContainer>
            <Content>
                <DescriptionContainer>
                    <Title>{t(OUR_CUSTOMERS)}</Title>
                    <Description>{t(CUSTOMER_DESCRIPTION)}</Description>
                </DescriptionContainer>
                <CustomersContainer>
                    {logoWithoutOpacityList.map((logo, index) => {
                        return <ImageComponent key={index} source={logo} />;
                    })}
                </CustomersContainer>
            </Content>
        </ContentContainer>
    );
};

export default Overview;
