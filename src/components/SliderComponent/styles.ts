import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, tablet, mobileX } = size;

export const SliderSectionContent = styled.div<{ size: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-direction: column;
    gap: ${({ size, theme: { gap } }) =>
        size === 'small' ? gap.xxl : gap.x2l}px;
    margin: ${({ theme: { margin } }) => margin.xxl};

    @media (max-width: ${laptopM}px) {
        align-items: center;
    }
    @media (max-width: ${tablet}px) {
        margin: ${({ theme: { margin } }) => margin.l1l};
        gap: ${({ size, theme: { gap } }) =>
            size === 'small' ? gap.sl : gap.x2l}px;
    }
`;

export const SliderContentHeader = styled.div<{ contentPosition: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxl}px;
    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.sxx}px;
    }
`;

export const SliderContentTitle = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${laptopM}px) {
        padding-left: ${({ theme: { padding } }) => padding.lmm}px;
    }
    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }

    @media (max-width: ${mobileX}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.x2l}px;
    }
`;

export const SliderDescription = styled.div<{ contentPosition: string }>`
    padding: 0 15px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    letter-spacing: -0.015em;

    /* Grey */

    color: #9497a1;
`;

export const SliderControls = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;

    @media (max-width: ${laptopM}px) {
        padding-right: ${({ theme: { padding } }) => padding.lmm}px;
    }
    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.xs}px;
    }
`;

export const SliderButton = styled.button<{ isDisabled: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.lx};

    background: ${({ theme: { colors } }) => colors.tertiary};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.xl}px;
    border: ${({ theme: { border } }) => border.none};
    cursor: pointer;

    img {
        opacity: ${({ theme: { opacity }, isDisabled }) =>
            isDisabled ? opacity.s : opacity.l};
    }

    &:disabled {
        cursor: not-allowed;
    }
    @media (max-width: ${tablet}px) {
        padding: ${({ theme: { padding } }) => padding.lmm}px;
    }
    @media (max-width: ${mobileX}px) {
        padding: ${({ theme: { padding } }) => padding.ll}px;
    }
`;

export const Slider = styled.div`
    overflow-x: clip;

    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${laptopM}px) {
        width: ${({ theme: { width } }) => width.x3ll}px;
    }
    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.x2ll}px;
        margin: ${({ theme: { margin } }) => margin.m3l}px;
    }
`;

export const SliderCarousel = styled.div<{
    params: { index: number; childrensLength: number };
}>`
    width: ${({ params: { childrensLength } }) =>
        css`calc(1125px / 3 * ${childrensLength})`};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
    padding-left: ${({ theme: { padding } }) => padding.x}px;
    transform: ${({ params: { index } }) => css`translateX(${index * 1125}px)`};

    @media (max-width: ${laptopM}px) {
        width: ${({ params: { childrensLength } }) =>
            css`calc(747px / 2 * ${childrensLength})`};
        transform: ${({ params: { index }, theme: { width } }) =>
            css`translateX(${index * width.mm}px)`};
    }

    @media (max-width: ${tablet}px) {
        width: ${({ params: { childrensLength } }) =>
            css`calc(375px / 1 * ${childrensLength})`};
        transform: ${({ params: { index }, theme: { width } }) =>
            css`translateX(${index * width.x1xx}px)`};
    }
`;
