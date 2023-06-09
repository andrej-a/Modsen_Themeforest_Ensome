import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptop } = size;
export const ComponentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s3s};

    background: ${({ theme: { colors } }) => colors.background};
`;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.x2l}px;
    margin: ${({ theme: { margin } }) => margin.xxl};

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        margin: ${({ theme: { margin } }) => margin.l};
        gap: ${({ theme: { gap } }) => gap.l}px;
    }
`;
