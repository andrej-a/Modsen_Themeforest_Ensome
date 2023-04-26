import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileL, mobileS } = size;
export const ContactUsContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const ContactUsContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.x2l};

    @media (max-width: ${mobileL}px) {
        padding: ${({ theme: { padding } }) => padding.s3s};
        gap: ${({ theme: { gap } }) => gap.sxx}px;
        margin: ${({ theme: { margin } }) => margin.ll};

        button {
            width: ${({ theme: { width } }) => width.x1ll}px;
            padding: ${({ theme: { padding } }) => padding.x2ss};
        }
    }

    @media (max-width: ${mobileS}px) {
        button {
            width: ${({ theme: { width } }) => width.x}px;
        }
    }
`;

export const ContactUsTitle = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${mobileL}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const ContactUsDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    text-align: center;
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${mobileL}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        margin-bottom: ${({ theme: { margin } }) => margin.x2s}px;
    }
`;
