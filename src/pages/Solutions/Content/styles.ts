import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, tablet } = size;
export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.xxl};

    @media (max-width: ${laptopM}px) {
        justify-content: center;
        align-items: center;
    }

    @media (max-width: ${tablet}px) {
        margin: ${({ theme: { margin } }) => margin.l1l};
    }
`;
