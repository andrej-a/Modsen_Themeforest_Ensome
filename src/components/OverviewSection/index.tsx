import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent } from '@/components';
import { NumberComponent } from '@/componentsLibrary';
import { dictionary } from '@/types/constants';

import clientsLogos from '../../config/clientLogos';
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
import IOverviewSection from './types';

const { OVERVIEW_TITLE, OVERVIEW_DESCRIPTION } = dictionary;

const OverviewSection = memo(
    ({ background, isClientsLogoShow }: IOverviewSection) => {
        const { t } = useTranslation();
        return (
            <OverviewSectionContainer background={background}>
                <Overview>
                    <OverviewTitleContainer>
                        {t(OVERVIEW_TITLE)}
                    </OverviewTitleContainer>
                    <OverviewContentContainer>
                        <OverviewProjects>
                            {projectsInformation.map(
                                (
                                    { amountOfWorkeDone, descriptionOfWorke },
                                    index,
                                ) => {
                                    return (
                                        <NumberComponent
                                            key={index}
                                            settings={{
                                                type: 'variant 4',
                                                mainColor: 'primary',
                                                secondColor: 'grey',
                                            }}
                                            content={{
                                                main: amountOfWorkeDone,
                                                second: t(descriptionOfWorke),
                                            }}
                                        />
                                    );
                                },
                            )}
                        </OverviewProjects>
                        <OverviewDescription
                            isClientsLogoShow={isClientsLogoShow}
                        >
                            {t(OVERVIEW_DESCRIPTION)}
                        </OverviewDescription>
                    </OverviewContentContainer>
                    {isClientsLogoShow && (
                        <OverviewClientsLogos>
                            {clientsLogos.map((logo, index) => {
                                return (
                                    <ImageComponent key={index} source={logo} />
                                );
                            })}
                        </OverviewClientsLogos>
                    )}
                </Overview>
            </OverviewSectionContainer>
        );
    },
);

export default OverviewSection;
