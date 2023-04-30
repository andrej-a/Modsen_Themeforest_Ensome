import React, { memo, useEffect, useState } from 'react';

import { PersonCard } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { PersonComponentProps } from '@/types/componentsOptions';
import { size } from '@/types/constants';

import { Person } from './styles';

const { laptopM } = size;

const PersonComponent = memo(
    ({ name, photo, position, index, social }: PersonComponentProps) => {
        const [isShow, setIsShow] = useState(false);
        const { isMobile } = useMobile(laptopM);
        useEffect(() => {
            setIsShow(true);
        }, []);

        return (
            <Person
                data-test="personCard"
                isShow={isShow}
                pos={isMobile ? false : index % 3 === 1}
                key={name}
            >
                <PersonCard
                    settings={{
                        type: isMobile ? 'horizontal' : 'vertical',
                        content: {
                            name,
                            position,
                            photo,
                            social,
                        },
                    }}
                />
            </Person>
        );
    },
);

export default PersonComponent;
