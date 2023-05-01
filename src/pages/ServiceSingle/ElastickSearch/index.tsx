import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IElasticContainerItems } from '@/components/SingleBlogMainContent/types';
import { useAppSelector } from '@/hooks/useStore';
import { serviceSelector } from '@/store/selectors/selectors';

import ElasticItemsComponent from './ElasticItem';
import { ElasticContainer } from './styles';

const ServiceElasticSearch = memo(
    ({ isVisible, onSetIsVisible }: IElasticContainerItems) => {
        const { searchingValue, services } = useAppSelector(serviceSelector);
        const [matchedServices, setMatchedServices] = useState<string[]>([]);
        const { t } = useTranslation();

        useEffect(() => {
            const result: string[] = [];
            if (!searchingValue) {
                setMatchedServices([]);
                return;
            }
            services.forEach(({ title }) => {
                if (
                    t(title)
                        .toLowerCase()
                        .includes(searchingValue.toLowerCase())
                ) {
                    result.push(title);
                }
            });
            setMatchedServices(result);
        }, [searchingValue]);

        return (
            <>
                {isVisible && (
                    <ElasticContainer>
                        <ElasticItemsComponent
                            matchedServices={matchedServices}
                            onSetIsVisible={onSetIsVisible}
                        />
                    </ElasticContainer>
                )}
            </>
        );
    },
);

export default ServiceElasticSearch;
