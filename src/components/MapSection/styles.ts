import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileL } = size;

export const MapSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: ${({ theme: { height } }) => height.x2l}px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media (max-width: ${mobileL}px) {
        width: ${({ theme: { width } }) => width.xxl}vw;
        max-height: ${({ theme: { height } }) => height.x6l}px;
    }
`;
