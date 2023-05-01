import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopL, tablet } = size;
export const SectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.background};
`;

export const ContentContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${laptopL}px) {
        flex-direction: column;
        margin: ${({ theme: { margin } }) => margin.ll};
    }
`;

export const Description = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    height: auto;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.sxx}px;
    }
`;

export const DescriptionTitle = styled.p`
    width: ${({ theme: { width } }) => width.xxl}%;

    text-align: left;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const DescriptionText = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    }
`;

export const Cards = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    & > :nth-child(1) {
        position: relative;
        bottom: ${({ theme: { bottom } }) => bottom.s}px;
    }
    & > :nth-child(3) {
        position: relative;
        bottom: ${({ theme: { bottom } }) => bottom.s}px;
    }

    & > :nth-child(2) {
        position: relative;
        top: ${({ theme: { top } }) => top.s}px;
    }
    & > :nth-child(4) {
        position: relative;
        top: ${({ theme: { top } }) => top.s}px;
    }

    @media (max-width: ${laptopL}px) {
        & > :nth-child(1) {
            bottom: 0;
        }
        & > :nth-child(3) {
            bottom: 0;
        }

        & > :nth-child(2) {
            top: 0;
        }
        & > :nth-child(4) {
            top: 0;
        }
    }

    @media (max-width: ${tablet}px) {
        justify-content: center;
    }
`;
