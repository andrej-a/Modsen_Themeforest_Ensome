import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptop, tablet } = size;

export const HeroSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    background: ${({ theme: { colors } }) => colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeroSectionContentContainer = styled.div`
    position: relative;
    width: auto;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ theme: { margin } }) => margin.xl}px;
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        gap: ${({ theme: { gap } }) => gap.sxx}px;
    }

    @media (max-width: ${tablet}px) {
        margin-top: ${({ theme: { margin } }) => margin.x}px;
        margin-bottom: ${({ theme: { margin } }) => margin.l1x}px;
    }
`;

export const HeroSectionTitleContainer = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.xl}%;
    height: auto;
    display: flex;
    align-items: center;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        max-width: none;
    }
`;

export const HeroSectionTitle = styled.h1`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    span {
        color: ${({ theme: { colors } }) => colors.primary};
    }

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
    }

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xxlll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const LearnMoreButton = styled.div`
    position: absolute;
    top: ${({ theme: { top } }) => top.xl}%;
    right: ${({ theme: { right } }) => right.l}%;

    width: auto;
    height: auto;
    padding: ${({ theme: { padding } }) => padding.l}px;

    background: ${({ theme: { colors } }) => colors.white};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.full}%;

    @media (max-width: ${tablet}px) {
        top: ${({ theme: { top } }) => top.lm}%;
        right: ${({ theme: { right } }) => right.sx}%;
    }
`;

export const HeroSectionDescriptionContainer = styled(
    HeroSectionTitleContainer,
)`
    width: ${({ theme: { width } }) => width.l}%;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
    }
`;

export const HeroSectionDescription = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.lx}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    }
`;

export const HeroSectionImageContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    img {
        max-width: ${({ theme: { width } }) => width.xxl}%;

        @media (max-width: ${tablet}px) {
            height: ${({ theme: { width } }) => width.x7l}px;
        }
    }
`;
