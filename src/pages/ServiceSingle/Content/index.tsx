import React from 'react';
import { useTranslation } from 'react-i18next';

import Customers from '@/assets/images/pictures/customers.png';
import Solutions from '@/assets/images/pictures/solution.png';
import { ImageComponent } from '@/components';
import Categories from '@/components/SingleBlogMainContent/Categories';
import { useAppSelector } from '@/hooks/useStore';
import { serviceSelector } from '@/store/selectors/selectors';

import {
    CheckList,
    ContentText,
    ImageContainer,
    LeftSidebar,
    RightSideBar,
    SinglePageContent,
    SinglePageContentContainer,
    SolutionCheckList,
    TextWithImage,
} from './styles';

const ServiceSingleContent = () => {
    const {
        currentServicePage: { content, solutionList },
        services,
    } = useAppSelector(serviceSelector);
    const { t } = useTranslation();
    return (
        <SinglePageContentContainer>
            <SinglePageContent>
                <LeftSidebar>
                    {Object.values(content).map((key, index) => {
                        if (index === 0) {
                            return (
                                <TextWithImage>
                                    {' '}
                                    <ContentText
                                        dangerouslySetInnerHTML={{
                                            __html: t(key),
                                        }}
                                    />
                                    <ImageContainer>
                                        <ImageComponent
                                            source={
                                                index === 0
                                                    ? Customers
                                                    : Solutions
                                            }
                                        />
                                    </ImageContainer>
                                </TextWithImage>
                            );
                        }
                        if (index === 2) {
                            return (
                                <TextWithImage>
                                    <ContentText
                                        dangerouslySetInnerHTML={{
                                            __html: t(key),
                                        }}
                                    />
                                    <SolutionCheckList>
                                        <ImageComponent source={Solutions} />
                                        <CheckList
                                            dangerouslySetInnerHTML={{
                                                __html: t(solutionList),
                                            }}
                                        />
                                    </SolutionCheckList>
                                </TextWithImage>
                            );
                        }
                        return (
                            <ContentText
                                dangerouslySetInnerHTML={{
                                    __html: t(key),
                                }}
                            />
                        );
                    })}
                </LeftSidebar>
                <RightSideBar>
                    <Categories content={services} />
                </RightSideBar>
            </SinglePageContent>
        </SinglePageContentContainer>
    );
};

export default ServiceSingleContent;
