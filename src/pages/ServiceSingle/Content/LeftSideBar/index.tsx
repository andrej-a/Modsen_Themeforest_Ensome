import React from 'react';
import { t } from 'i18next';

import Customers from '@/assets/images/pictures/customers.png';
import Solutions from '@/assets/images/pictures/solution.png';
import { ImageComponent } from '@/components';
import { useAppSelector } from '@/hooks/useStore';
import { serviceSelector } from '@/store/selectors/selectors';

import {
    CheckList,
    ContentText,
    ImageContainer,
    LeftSidebar,
    SolutionCheckListContainer,
    TextWithImage,
} from './styles';

const LeftSideBarContainer = () => {
    const {
        currentServicePage: { content, solutionList },
    } = useAppSelector(serviceSelector);

    return (
        <LeftSidebar>
            {Object.values(content).map((key, index) => {
                if (index === 0) {
                    return (
                        <TextWithImage key={index}>
                            {' '}
                            <ContentText
                                dangerouslySetInnerHTML={{
                                    __html: t(key),
                                }}
                            />
                            <ImageContainer>
                                <ImageComponent
                                    source={index === 0 ? Customers : Solutions}
                                />
                            </ImageContainer>
                        </TextWithImage>
                    );
                }
                if (index === 2) {
                    return (
                        <TextWithImage key={index}>
                            <ContentText
                                dangerouslySetInnerHTML={{
                                    __html: t(key),
                                }}
                            />
                            <SolutionCheckListContainer>
                                <ImageComponent source={Solutions} />
                                <CheckList
                                    dangerouslySetInnerHTML={{
                                        __html: t(solutionList),
                                    }}
                                />
                            </SolutionCheckListContainer>
                        </TextWithImage>
                    );
                }
                return (
                    <ContentText
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: t(key),
                        }}
                    />
                );
            })}
        </LeftSidebar>
    );
};

export default LeftSideBarContainer;
