import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '@/settings/i18n';
import { dictionary } from '@/types/constants';

import { Position, SwitchElement, SwitcherContainer, Text } from './styles';

const { RUSSIAN, ENGLISH } = dictionary;

const Switcher = () => {
    const [lang, setLang] = useState(i18n.language);
    const { t } = useTranslation();
    const onHandleLang = () => {
        i18n.language === 'ru'
            ? i18n.changeLanguage('en')
            : i18n.changeLanguage('ru');
        setLang(i18n.language);
    };
    return (
        <SwitcherContainer onClick={onHandleLang}>
            <Position data-test="SwitchToEnglish">
                <Text>{t(ENGLISH)}</Text>
            </Position>
            <Position data-test="SwitchToRussian">
                <Text>{t(RUSSIAN)}</Text>
            </Position>
            <SwitchElement currentLang={lang} />
        </SwitcherContainer>
    );
};

export default Switcher;
