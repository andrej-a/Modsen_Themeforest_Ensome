import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptop, tablet } = size;

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
    justify-content: center;
    align-items: flex-start;

    margin: ${({ theme: { margin } }) => margin.xxl};
    gap: ${({ theme: { gap } }) => gap.x2l}px;
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        align-items: center;
        gap: ${({ theme: { gap } }) => gap.sl}px;
        margin: ${({ theme: { margin } }) => margin.l1l};
    }
`;

export const Suggestion = styled.div`
    width: ${({ theme: { width } }) => width.l1x}px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: ${({ theme: { fontSize } }) => fontSize.x2l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xll}px;
    }
`;
