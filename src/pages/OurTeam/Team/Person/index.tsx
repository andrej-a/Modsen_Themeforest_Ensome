import React, { forwardRef, memo, useEffect, useState } from 'react';

import { PersonCard } from '@/componentsLibrary';
import useMobile from '@/hooks/useMobile';
import { size } from '@/types/constants';

import IPersonComponentProps from '../../types';
import { Person } from './styles';

const { laptopM } = size;

const PersonComponent = memo(
    forwardRef(
        (
            { name, photo, position, index, social }: IPersonComponentProps,
            ref: React.ForwardedRef<HTMLDivElement>,
        ) => {
            const [isShow, setIsShow] = useState(false);
            const { isMobile } = useMobile(laptopM);
            useEffect(() => {
                setIsShow(true);
            }, []);

            return (
                <Person
                    ref={ref}
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
    ),
);

export default PersonComponent;
