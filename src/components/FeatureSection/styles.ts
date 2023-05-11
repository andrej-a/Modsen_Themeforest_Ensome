import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptop, tablet, mobileL, laptopL } = size;

export const FeatureSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
    }
`;

export const PlatformDescriptionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s3s};
`;

export const PlatformDescription = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
    height: auto;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        max-width: none;
        flex-direction: column;
        margin: ${({ theme: { margin } }) => margin.l1l};
        gap: ${({ theme: { gap } }) => gap.sxx}px;
    }
`;

export const PlatformDescriptionTitle = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.x4l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.x4l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    span {
        color: ${({ theme: { colors } }) => colors.primary};
    }

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        text-align: left;
    }

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.x2ll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const TextContainer = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.m2l}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        max-width: none;
        align-items: center;
    }

    @media (max-width: ${mobileL}px) {
        a,
        button {
            width: ${({ theme: { width } }) => width.xxl}%;
        }
        button {
            padding: ${({ theme: { padding } }) => padding.x2ss};
        }
    }
`;

export const PlatformDescriptionText = styled.p`
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

export const PlatformInformationContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xl}px;
    background: ${({ theme: { colors } }) => colors.background};
    padding: ${({ theme: { padding } }) => padding.s3s};
`;

export const PlatformInformationImage = styled.div`
    @media (max-width: ${laptopL}px) {
        display: none;
    }
`;

export const PlatformInformationText = styled.div`
    width: ${({ theme: { width } }) => width.xll}%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    p {
        max-width: ${({ theme: { width } }) => width.xxxl}px;
    }

    @media (max-width: ${laptopL}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        max-width: none;
        align-items: center;
        gap: ${({ theme: { gap } }) => gap.sxx}px;
        margin: ${({ theme: { margin } }) => margin.ll};
    }

    @media (max-width: ${mobileL}px) {
        a,
        button {
            width: ${({ theme: { width } }) => width.xxl}%;
        }
        button {
            padding: ${({ theme: { padding } }) => padding.x2ss};
        }
    }
`;

export const PlatformInformationTextTitle = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const PlatformInformationTextDescription = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        max-width: none;
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    }
`;

export const MobileImageContainer = styled.div`
    display: none;
    @media (max-width: ${mobileL}px) {
        display: flex;
        justify-content: center;
    }
`;
