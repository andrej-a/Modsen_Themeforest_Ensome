import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent, StatisticCard } from '@/components';
import { NumberComponent } from '@/componentsLibrary';
import { dictionary } from '@/types/constants';

import clientsLogos from './settings/clientLogos';
import projectsInformation from './settings/projectsInformation';
import {
    Overview,
    OverviewClientsLogos,
    OverviewContentContainer,
    OverviewDescription,
    OverviewProjects,
    OverviewSectionContainer,
    OverviewTitleContainer,
} from './styles';

const { OVERVIEW_TITLE, OVERVIEW_DESCRIPTION } = dictionary;

const OverviewSection = () => {
    const { t } = useTranslation();
    return (
        <OverviewSectionContainer>
            <Overview>
                <OverviewTitleContainer>
                    {t(OVERVIEW_TITLE)}
                </OverviewTitleContainer>
                <OverviewContentContainer>
                    <OverviewProjects>
                        {projectsInformation.map(
                            ({ amountOfWorkeDone, descriptionOfWorke }) => {
                                return (
                                    <NumberComponent
                                        settings={{
                                            type: 'variant 4',
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
                    </OverviewProjects>
                    <OverviewDescription>
                        {t(OVERVIEW_DESCRIPTION)}
                    </OverviewDescription>
                </OverviewContentContainer>
                <OverviewClientsLogos>
                    {clientsLogos.map(logo => {
                        return <ImageComponent source={logo} />;
                    })}
                </OverviewClientsLogos>
            </Overview>
        </OverviewSectionContainer>
    );
};

export default OverviewSection;
