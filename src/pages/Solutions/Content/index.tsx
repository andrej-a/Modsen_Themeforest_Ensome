import React from 'react';

import { ServiceCard } from '@/componentsLibrary';
import solutions from '@/config/solutions';

import { Content, ContentContainer } from './styles';

const SolutionsPageContent = () => {
    return (
        <ContentContainer>
            <Content>
                {solutions.map(sol => {
                    return (
                        <ServiceCard
                            key={sol.title}
                            type="wide glass icon"
                            content={sol}
                        />
                    );
                })}
            </Content>
        </ContentContainer>
    );
};

export default SolutionsPageContent;
