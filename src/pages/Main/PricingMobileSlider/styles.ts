import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileL } = size;

export const ComponentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: none;
    justify-content: center;
    align-items: center;

    @media (max-width: ${mobileL}px) {
        display: flex;
    }
`;
