import React from 'react';
import { useTranslation } from 'react-i18next';

import { useAppSelector } from '@/hooks/useStore';
import { solutionSelector } from '@/store/selectors/selectors';

import { ArchorLink, ArchorLinksContainer } from './styles';

const ArchorLinks = () => {
    const {
        currentSolutionPage: { page },
        currentVisibleElement,
    } = useAppSelector(solutionSelector);
    const { t } = useTranslation();

    return (
        <ArchorLinksContainer>
            {Object.values(page).map(({ id, title }) => {
                return (
                    <ArchorLink
                        isActive={id === currentVisibleElement}
                        href={`#${id}`}
                    >
                        {t(title)}
                    </ArchorLink>
                );
            })}
        </ArchorLinksContainer>
    );
};

export default ArchorLinks;
