import React, { memo, useEffect, useState } from 'react';

import { ImageComponent } from '@/components';
import { PersonComponentProps } from '@/types/componentsOptions';
import { numberEnums } from '@/types/constants';

import { Name, Person, PersonInformation, Position } from './styles';

const { SHOWING_DELAY_MS } = numberEnums;

const PersonComponent = memo(
    ({ name, photo, position, index }: PersonComponentProps) => {
        const [isShow, setIsShow] = useState(false);

        useEffect(() => {
            setIsShow(true);
        }, []);

        return (
            <Person
                data-test="personCard"
                isShow={isShow}
                pos={index % 3 === 1}
                key={name}
            >
                <ImageComponent source={photo} />
                <PersonInformation>
                    <Name>{name}</Name>
                    <Position>{position}</Position>
                </PersonInformation>
            </Person>
        );
    },
);

export default PersonComponent;
