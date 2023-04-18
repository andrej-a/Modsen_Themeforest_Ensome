import React, { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import tags from '@/config/tags';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { blogSelector } from '@/store/selectors/selectors';
import { setTagFromSearchInput } from '@/store/slices/blog';
import { IElasticContainerItems } from '@/types/componentsOptions';
import { valuesOfTheSettings } from '@/types/constants';

import { ElasticContainer, ElasticItem } from './styles';

const { NO_DATA } = valuesOfTheSettings;
const ElasticContainerItems = memo(
    ({ isVisible, onSetIsVisible }: IElasticContainerItems) => {
        const { tagFromSearchInput } = useAppSelector(blogSelector);
        const [resultOfSearch, setResultOfSearch] = useState<string[]>([]);
        const dispatch = useAppDispatch();
        const { t } = useTranslation();

        useEffect(() => {
            const result: string[] = [];
            tags.forEach(tag => {
                if (
                    tag.toLowerCase().includes(tagFromSearchInput.toLowerCase())
                ) {
                    result.push(tag);
                }
            });
            setResultOfSearch(result);
        }, [tagFromSearchInput]);

        const elasticSearchManager = (searchValue: string) => () => {
            dispatch(setTagFromSearchInput(searchValue));
            onSetIsVisible(false)();
        };
        return (
            <>
                {isVisible && (
                    <ElasticContainer>
                        {resultOfSearch.length > 0
                            ? resultOfSearch.map(tag => {
                                  return (
                                      <ElasticItem
                                          data-test="elastickItem"
                                          key={tag}
                                          onClick={elasticSearchManager(tag)}
                                      >
                                          {tag}
                                      </ElasticItem>
                                  );
                              })
                            : t(NO_DATA)}
                    </ElasticContainer>
                )}
            </>
        );
    },
);

export default ElasticContainerItems;
