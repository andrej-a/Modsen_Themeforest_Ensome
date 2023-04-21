import React, { memo } from 'react';
import { t } from 'i18next';

import { useAppDispatch } from '@/hooks/useStore';
import { setCurrentLink, setSearchingValue } from '@/store/slices/serviceSlice';
import { ElasticItemComponentProps } from '@/types/componentsOptions';
import { dictionary } from '@/types/constants';

import { ElasticItem } from './styles';

const { NO_DATA } = dictionary;

const ElasticItemsComponent = memo(
    ({ matchedServices, onSetIsVisible }: ElasticItemComponentProps) => {
        const dispatch = useAppDispatch();

        const elasticSearchManager = (title: string) => () => {
            dispatch(setSearchingValue(t(title)));
            dispatch(setCurrentLink(t(title)));
            onSetIsVisible(false)();
        };

        return (
            <>
                {matchedServices.length > 0
                    ? matchedServices.map(title => {
                          return (
                              <ElasticItem
                                  data-test="elastickItem"
                                  onClick={elasticSearchManager(title)}
                                  key={title}
                              >
                                  {t(title)}
                              </ElasticItem>
                          );
                      })
                    : t(NO_DATA)}
            </>
        );
    },
);

export default ElasticItemsComponent;
