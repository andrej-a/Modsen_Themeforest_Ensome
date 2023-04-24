import React from 'react';
import { useTranslation } from 'react-i18next';

import { NumberComponent } from '@/componentsLibrary';
import { dictionary } from '@/types/constants';

import statistic from './config/statistic';
import {
    Container,
    ContentContainer,
    StatisticContainer,
    Title,
} from './styles';

const { ENSOME_IN_NUMBERS } = dictionary;

const EnsomeInNumbers = () => {
    const { t } = useTranslation();
    return (
        <ContentContainer>
            <Container>
                <Title>{t(ENSOME_IN_NUMBERS)}</Title>
                <StatisticContainer>
                    {statistic.map(
                        ({ amountOfWorkeDone, descriptionOfWorke }) => {
                            return (
                                <NumberComponent
                                    key={amountOfWorkeDone}
                                    settings={{
                                        type: 'variant 1',
                                        mainColor: 'primary',
                                        secondColor: 'grey',
                                    }}
                                    content={{
                                        main: amountOfWorkeDone,
                                        second: descriptionOfWorke,
                                    }}
                                />
                            );
                        },
                    )}
                </StatisticContainer>
            </Container>
        </ContentContainer>
    );
};

export default EnsomeInNumbers;
