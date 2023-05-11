import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, tablet, mobileL } = size;

export const OverviewSectionContainer = styled.div<{ background: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${tablet}px) {
        background: ${({ background, theme: { colors } }) =>
            colors[background] ?? colors.white};
    }
`;

export const Overview = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    margin-top: ${({ theme: { margin } }) => margin.ml}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxl}px;

    @media (max-width: ${tablet}px) {
        margin-top: ${({ theme: { margin } }) => margin.l3x}px;
        gap: ${({ theme: { gap } }) => gap.sxx}px;
    }
`;

export const OverviewTitleContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const OverviewContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${laptopM}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        flex-direction: column;
    }
`;

export const OverviewProjects = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${laptopM}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        justify-content: space-around;
    }

    @media (max-width: ${mobileL}px) {
        justify-content: center;
        gap: ${({ theme: { gap } }) => gap.xs}px;
    }
`;

export const OverviewDescription = styled.div<{ isClientsLogoShow: boolean }>`
    max-width: ${({ theme: { width } }) => width.xxxl}px;
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
        text-align: center;
        margin-bottom: ${({ isClientsLogoShow, theme: { margin } }) =>
            isClientsLogoShow ? margin.none : margin.l3x}px;
    }
`;

export const OverviewClientsLogos = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${tablet}px) {
        img {
            width: ${({ theme: { width } }) => width.xx1l}px;
        }
    }
`;
