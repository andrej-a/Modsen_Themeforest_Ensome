import React, { useCallback, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import team from '@/config/team';
import { numberEnums } from '@/types/constants';

import PersonComponent from './Person';
import { Content, ContentContainer } from './styles';

const { OFFSET_PX } = numberEnums;

const Team = () => {
    const [cardsToRender, setCardsToRender] = useState(team);
    const [index, setIndex] = useState(0);

    const handleScroll = useCallback(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;

        if (Math.ceil(windowHeight + scrollTop) >= documentHeight - OFFSET_PX) {
            setIndex(index => index + 1);
            setCardsToRender(prev => [...prev, ...team]);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (index >= 3) {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [index]);

    return (
        <ContentContainer>
            <Content>
                {cardsToRender.map(({ name, photo, position }, index) => {
                    return (
                        <PersonComponent
                            key={v4()}
                            name={name}
                            photo={photo}
                            position={position}
                            index={index}
                        />
                    );
                })}
            </Content>
        </ContentContainer>
    );
};

export default Team;
