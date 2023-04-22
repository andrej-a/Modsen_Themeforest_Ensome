import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';

import { ImageComponent } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { solutionSelector } from '@/store/selectors/selectors';
import { setCurrentVisibleElement } from '@/store/slices/solutions';

import {
    Content,
    ContentContainer,
    Description,
    TextContainer,
    Title,
    TypesContainer,
} from './styles';

type TObserver = (inView: boolean, entry: IntersectionObserverEntry) => void;
const SolutionContent = () => {
    const dispatch = useAppDispatch();
    const myRef = useRef<HTMLDivElement>(null);
    const {
        currentSolutionPage: { page },
    } = useAppSelector(solutionSelector);
    const { t } = useTranslation();
    const observer: TObserver = (inView, entry) => {
        console.log('Inview:', entry.target);
        // dispatch(setCurrentVisibleElement(entry.target));
    };

    return (
        <ContentContainer>
            <Content>
                <TextContainer ref={myRef}>
                    {Object.values(page).map(
                        ({ id, title, text, image, types }) => {
                            return (
                                <InView
                                    id={id}
                                    root={myRef.current}
                                    threshold={0.5}
                                    onChange={observer}
                                >
                                    <Title id={id}>{t(title)}</Title>

                                    {image ? (
                                        <ImageComponent source={image} />
                                    ) : null}
                                    <Description
                                        dangerouslySetInnerHTML={{
                                            __html: t(text),
                                        }}
                                    />
                                    {types ? (
                                        <TypesContainer
                                            dangerouslySetInnerHTML={{
                                                __html: t(types),
                                            }}
                                        />
                                    ) : null}
                                </InView>
                            );
                        },
                    )}
                </TextContainer>
            </Content>
        </ContentContainer>
    );
};

export default SolutionContent;
