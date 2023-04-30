import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, tablet } = size;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const Container = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin: ${({ theme: { margin } }) => margin.x2l};
    gap: ${({ theme: { gap } }) => gap.x4ll}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${laptopM}px) {
        margin: ${({ theme: { margin } }) => margin.l1l};
        padding: ${({ theme: { padding } }) => padding.s3s};
        gap: ${({ theme: { gap } }) => gap.sl}px;
    }
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
    }
`;

export const StatisticContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;

    @media (max-width: ${laptopM}px) {
        flex-wrap: wrap;
    }
`;
