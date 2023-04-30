import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { mobileM, laptop } = size;

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
    justify-content: center;
    align-items: center;

    margin-top: ${({ theme: { margin } }) => margin.m2l}px;
    margin-bottom: ${({ theme: { margin } }) => margin.ml}px;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${laptop}px) {
        margin-top: ${({ theme: { margin } }) => margin.l3x}px;
        margin-bottom: ${({ theme: { margin } }) => margin.llxx}px;
    }

    @media (max-width: ${mobileM}px) {
        margin-top: ${({ theme: { margin } }) => margin.none};
    }

    a {
        text-decoration: none;
    }
`;
