import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;

export const CardContainer = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.s}px;
    padding-right: ${({ theme: { padding } }) => padding.x6l}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;

    ${({ type }) => {
        switch (type) {
            case 'variant 1':
                return css`
                    border-right: ${({ theme: { border } }) => border.xs};
                    @media (max-width: ${tablet}px) {
                        gap: ${({ theme: { gap } }) => gap.sx}px;
                    }
                `;

            case 'variant 4':
                return css`
                    align-items: flex-start;
                    padding: ${({ theme: { padding } }) => padding.none};
                    @media (max-width: ${tablet}px) {
                        align-items: center;
                        gap: ${({ theme: { gap } }) => gap.none};
                    }
                `;
            default:
                break;
        }
    }}
`;

export const Title = styled.div<{ color: string; type: string }>`
    display: flex;
    align-items: center;

    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xx3l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.xs}em;
    color: ${({ color, theme: { colors } }) => colors[color]};

    ${({ type }) => {
        switch (type) {
            case 'variant 4':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.x3l}px;

                    @media (max-width: ${tablet}px) {
                        font-size: ${({ theme: { fontSize } }) =>
                            fontSize.xll}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.x4l}px;
                        letter-spacing: ${({ theme: { letterSpacing } }) =>
                            letterSpacing.xs}em;
                    }
                `;
            case 'variant 1':
                return css`
                    @media (max-width: ${tablet}px) {
                        font-size: ${({ theme: { fontSize } }) =>
                            fontSize.x3l}px;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const Description = styled.div<{ color: string; type: string }>`
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ color, theme: { colors } }) => colors[color]};

    ${({ type }) => {
        switch (type) {
            case 'variant 4':
                return css`
                    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
                    @media (max-width: ${tablet}px) {
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                        text-align: center;
                    }
                `;
            case 'variant 1':
                return css`
                    @media (max-width: ${tablet}px) {
                        width: ${({ theme: { width } }) => width.xxl}%;
                        text-align: center;
                        font-size: ${({ theme: { fontSize } }) =>
                            fontSize.xxl}px;
                    }
                `;
            default:
                break;
        }
    }}
`;
