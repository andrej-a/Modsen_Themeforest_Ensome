import React from 'react';
import { useTranslation } from 'react-i18next';

import Icon from '@/assets/images/logo/contacts_arrow.png';
import { ImageComponent } from '@/components';
import { UIConstants } from '@/types/constants';

import {
    CompanyDescription,
    CompanyDescriptionContainer,
    CompanyInfo,
    PrivacyContainer,
} from './styles';

const { COMPANY_INFO_SECONDARY, POLICY, TERMS } = UIConstants;
const Privacy = () => {
    const { t } = useTranslation();
    return (
        <PrivacyContainer>
            <CompanyDescriptionContainer>
                <CompanyDescription>
                    {POLICY} <ImageComponent source={Icon} />
                </CompanyDescription>
                <CompanyDescription>
                    {TERMS} <ImageComponent source={Icon} />
                </CompanyDescription>
            </CompanyDescriptionContainer>
            <CompanyInfo color="helperBlue3">
                {COMPANY_INFO_SECONDARY}
            </CompanyInfo>
        </PrivacyContainer>
    );
};

export default Privacy;
