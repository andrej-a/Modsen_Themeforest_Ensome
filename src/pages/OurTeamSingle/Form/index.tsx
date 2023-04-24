import React from 'react';
import { useTranslation } from 'react-i18next';

import Form from '@/components/Form';
import { useAppSelector } from '@/hooks/useStore';
import { ourTeamSelector } from '@/store/selectors/selectors';
import { dictionary } from '@/types/constants';

import { Content, ContentContainer, Suggestion } from './styles';

const { WANT, SUGGESTION, WOMEN_SUGGESTION } = dictionary;

const FeedBack = () => {
    const {
        currentPerson: { name },
    } = useAppSelector(ourTeamSelector);
    const { t } = useTranslation();
    const firstName = name.split(' ')[0];
    const womensNames = ['Maral', 'Eva', 'Kohar'];
    const suggestion = womensNames.includes(firstName)
        ? WOMEN_SUGGESTION
        : SUGGESTION;

    return (
        <ContentContainer>
            <Content>
                <Suggestion>
                    {t(WANT)} {firstName} {t(suggestion)}
                </Suggestion>
                <Form type="group" />
            </Content>
        </ContentContainer>
    );
};

export default FeedBack;
