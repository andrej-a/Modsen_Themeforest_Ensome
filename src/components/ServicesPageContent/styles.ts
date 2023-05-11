import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileL } = size;

export const ContentWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme: { margin } }) => margin.ml}px;

    @media (max-width: ${mobileL}px) {
        margin: ${({ theme: { margin } }) => margin.l1l};
    }
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
`;
