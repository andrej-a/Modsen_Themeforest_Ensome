import React from 'react';

import { ServiceCard } from '@/componentsLibrary';
import service from '@/config/services';

import { Content, ContentWrapper } from './styles';

const ServiceContent = () => {
    return (
        <ContentWrapper>
            <Content>
                {service.map(serv => {
                    return (
                        <ServiceCard type="wide glass icon" content={serv} />
                    );
                })}
            </Content>
        </ContentWrapper>
    );
};

export default ServiceContent;
