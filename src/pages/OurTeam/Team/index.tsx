import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';

import team from '@/config/team';
import { useAppDispatch } from '@/hooks/useStore';
import { setCurrentPerson } from '@/store/slices/ourTeam';
import { numberEnums } from '@/types/constants';
import ITeamMember from '@/types/IPerson';

import PersonComponent from './Person';
import { Content, ContentContainer } from './styles';

const { OFFSET_PX } = numberEnums;
const Team = () => {
    const [cardsToRender, setCardsToRender] = useState<ITeamMember[]>(team);
    const [index, setIndex] = useState(0);
    const dispatch = useAppDispatch();

    const handlePerson = (person: ITeamMember) => () => {
        dispatch(setCurrentPerson(person));
    };

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
                {cardsToRender.map((data, index) => {
                    const { name, photo, position } = data;
                    return (
                        <Link
                            onClick={handlePerson(data)}
                            to={`/our team/${name}`}
                        >
                            <PersonComponent
                                key={v4()}
                                name={name}
                                photo={photo}
                                position={position}
                                index={index}
                            />
                        </Link>
                    );
                })}
            </Content>
        </ContentContainer>
    );
};

export default Team;
