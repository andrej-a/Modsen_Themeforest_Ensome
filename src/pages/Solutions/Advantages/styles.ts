import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopL, laptopM, mobileL } = size;

export const AdvantagesContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}%;
    display: flex;

    background: ${({ theme: { colors } }) => colors.background};

    @media (max-width: ${laptopM}px) {
        background: ${({ theme: { colors } }) => colors.white};
    }
`;

export const AdvantagesContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;

    @media (max-width: ${laptopM}px) {
        flex-direction: column;
    }
`;

export const AdvantagesImage = styled.div`
    @media (max-width: ${laptopL}px) {
        img {
            width: ${({ theme: { width } }) => width.xxl}%;
        }
    }
    @media (max-width: ${mobileL}px) {
        img {
            height: ${({ theme: { height } }) => height.x4l}px;
        }
    }
`;

export const AdvantagesDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${({ theme: { padding } }) => padding.x6l}px;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${laptopL}px) {
        width: ${({ theme: { width } }) => width.xll}%;
    }

    @media (max-width: ${laptopM}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        padding: ${({ theme: { padding } }) => padding.s3s};
        align-items: center;
    }
`;

export const Title = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin-bottom: ${({ theme: { margin } }) => margin.x}px;

    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;

    @media (max-width: ${laptopM}px) {
        text-align: center;
    }

    @media (max-width: ${mobileL}px) {
        margin-bottom: ${({ theme: { margin } }) => margin.none};
        margin-top: ${({ theme: { margin } }) => margin.l3x}px;

        text-align: left;
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.black};
    }
`;

export const AdvantagesItem = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;

    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sx}px;

    @media (max-width: ${mobileL}px) {
        gap: ${({ theme: { gap } }) => gap.s}px;
    }
`;

export const AdvantagesItemTitle = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;

    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;

    @media (max-width: ${mobileL}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xll}px;
    }
`;

export const AdvantagesItemDescription = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    color: ${({ theme: { colors } }) => colors.grey};
`;
