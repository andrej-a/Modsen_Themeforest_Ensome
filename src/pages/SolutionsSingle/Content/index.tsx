import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ImageComponent } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { solutionSelector } from '@/store/selectors/selectors';
import { setCurrentVisibleElement } from '@/store/slices/solutions';
import { numberEnums } from '@/types/constants';

import ArchorLinks from './ArchorLinks';
import {
    Content,
    ContentContainer,
    Description,
    TextContainer,
    Title,
    TypesContainer,
} from './styles';

const { START_SCROLL_POSITION, ARCHOR_OFFSET_TOP } = numberEnums;
const SolutionContent = () => {
    const dispatch = useAppDispatch();
    const myRef = useRef<HTMLDivElement>(null);
    const {
        currentSolutionPage: { page },
    } = useAppSelector(solutionSelector);
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.pageYOffset;
            if (scrollPos < START_SCROLL_POSITION) {
                dispatch(setCurrentVisibleElement(sections[0].id));
            }

            sections.forEach(section => {
                const top = section.offsetTop - ARCHOR_OFFSET_TOP;
                const bottom = top + section.offsetHeight;
                if (scrollPos >= top && scrollPos < bottom) {
                    dispatch(setCurrentVisibleElement(section.id));
                }
            });
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <ContentContainer>
            <Content>
                <ArchorLinks />
                <TextContainer ref={myRef}>
                    {Object.values(page).map(
                        ({ id, title, text, image, types }, index) => {
                            return (
                                <section key={index} id={id}>
                                    <Title>{t(title)}</Title>

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
                                </section>
                            );
                        },
                    )}
                </TextContainer>
            </Content>
        </ContentContainer>
    );
};

export default SolutionContent;
