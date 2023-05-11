import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { mobileL } = size;

export const CardContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x1l}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    padding: ${({ theme: { padding } }) => padding.ms};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    box-shadow: ${({ theme: { shadows } }) => shadows.shadowCard3};

    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    padding: ${({ theme: { padding } }) => padding.x5l}px;

                    @media (max-width: ${mobileL}px) {
                        gap: ${({ theme: { gap } }) => gap.none};
                        padding: ${({ theme: { padding } }) => padding.mll};
                        min-width: ${({ theme: { width } }) => width.xx2l}px;
                        max-width: ${({ theme: { width } }) => width.xx2l}px;
                    }
                `;
            case 'wide glass icon':
                return css`
                    max-width: ${({ theme: { width } }) => width.xxxl}px;
                    padding: ${({ theme: { padding } }) => padding.mx};
                    gap: ${({ theme: { gap } }) => gap.sxx}px;

                    @media (max-width: ${mobileL}px) {
                        padding: ${({ theme: { padding } }) => padding.mm};
                        gap: ${({ theme: { gap } }) => gap.none}px;
                        margin: ${({ theme: { margin } }) => margin.m3l};
                    }
                `;
            case 'small':
                return css`
                    max-width: ${({ theme: { width } }) => width.x2l}px;
                    padding: ${({ theme: { padding } }) => padding.lmx}px;
                    gap: ${({ theme: { gap } }) => gap.sx}px;

                    @media (max-width: ${mobileL}px) {
                        min-width: ${({ theme: { width } }) => width.lx2}px;
                        max-width: ${({ theme: { width } }) => width.lx2}px;
                    }
                `;

            default:
                break;
        }
    }}
`;

export const ImageContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    justify-content: center;
                    @media (max-width: ${mobileL}px) {
                        margin-bottom: ${({ theme: { margin } }) => margin.x}px;
                    }
                `;
            case 'wide glass icon':
                return css`
                    @media (max-width: ${mobileL}px) {
                        margin-bottom: ${({ theme: { margin } }) => margin.x}px;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const TitleContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    justify-content: center;
                    text-align: center;
                    @media (max-width: ${mobileL}px) {
                        margin-bottom: ${({ theme: { margin } }) =>
                            margin.xs}px;
                    }
                `;
            case 'small':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
                `;
            case 'wide glass icon':
                return css`
                    @media (max-width: ${mobileL}px) {
                        font-size: ${({ theme: { fontSize } }) =>
                            fontSize.xxl}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.xll}px;
                        margin-bottom: ${({ theme: { margin } }) =>
                            margin.x2s}px;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const DescriptionContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    text-align: center;
                `;
            case 'small':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                    line-height: ${({ theme: { lineHeight } }) =>
                        lineHeight.l}px;
                `;
            case 'wide glass icon':
                return css`
                    @media (max-width: ${mobileL}px) {
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                        margin-bottom: ${({ theme: { margin } }) =>
                            margin.xs}px;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const ReadMoreContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${({ type }) => {
        switch (type) {
            case 'right text':
                return css`
                    display: none;
                `;

            case 'center text':
                return css`
                    justify-content: center;

                    @media (max-width: ${mobileL}px) {
                        display: none;
                    }
                `;
            case 'small':
                return css`
                    display: none;
                `;
            default:
                break;
        }
    }}
`;
