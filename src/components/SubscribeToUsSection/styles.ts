import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptop, tablet, mobileL } = size;

export const SubscribeContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ type, theme: { colors } }) =>
        type === 'light' ? colors.primary : colors.secondary};
`;

export const SubscribeContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    margin: ${({ theme: { margin } }) => margin.lxxx}px;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.x3l}px;

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: ${({ theme: { gap } }) => gap.sl}px;
        margin: ${({ theme: { margin } }) => margin.l2l};
    }
`;

export const SubscribeDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x3l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.ssl}px;

    @media (max-width: ${laptop}px) {
        text-align: center;
    }
`;

export const Title = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    height: auto;
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};

    @media (max-width: ${tablet}px) {
        justify-content: center;
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const Description = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};

    @media (max-width: ${mobileL}px) {
        display: none;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
