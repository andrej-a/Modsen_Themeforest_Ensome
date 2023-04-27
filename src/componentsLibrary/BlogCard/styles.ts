import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { tablet, mobileM } = size;
export const BlogCardContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
`;

export const BlogCardContent = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.ssl}px;

    ${({ type }) => {
        switch (type) {
            case 'big':
                return css`
                    width: ${({ theme: { width } }) => width.x3l}px;
                    flex-direction: column;

                    @media (max-width: ${tablet}px) {
                        width: ${({ theme: { width } }) => width.x1ll}px;
                    }
                `;
            case 'medium':
                return css`
                    width: ${({ theme: { width } }) => width.xxxl}px;
                    flex-direction: column;
                    gap: ${({ theme: { gap } }) => gap.none};
                    box-shadow: ${({ theme: { shadows } }) =>
                        shadows.shadowCard3};

                    @media (max-width: ${tablet}px) {
                        width: width: ${({ theme: { width } }) => width.x1ll}px;
                        gap: ${({ theme: { gap } }) => gap.sxx}px;
                    }
                `;
            case 'small':
                return css`
                    width: ${({ theme: { width } }) => width.x1l}px;
                    flex-direction: column;

                    @media (max-width: ${mobileM}px) {
                        width: ${({ theme: { width } }) => width.xx2l}px;
                    }
                `;
            case 'right text':
                return css`
                    width: ${({ theme: { width } }) => width.x3l}px;
                `;
            case 'without description':
                return css`
                    width: ${({ theme: { width } }) => width.l1x}px;

                    @media (max-width: ${tablet}px) {
                        width: ${({ theme: { width } }) => width.x1ll}px;
                        gap: ${({ theme: { gap } }) => gap.xs}px;
                    }
                `;
            case 'no img':
                return css`
                    width: ${({ theme: { width } }) => width.x1l}px;
                    box-shadow: ${({ theme: { shadows } }) =>
                        shadows.shadowCard3};
                    padding: ${({ theme: { padding } }) => padding.lxxx};

                    @media (max-width: ${mobileM}px) {
                        width: ${({ theme: { width } }) => width.xx2l}px;
                        padding: ${({ theme: { padding } }) => padding.mll};
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export const ImageContainer = styled.div<{ type: string }>`
    img {
        width: ${({ theme: { width } }) => width.xxl}%;
        ${({ type }) => {
            switch (type) {
                case 'big':
                    return css`
                        @media (max-width: ${tablet}px) {
                            height: ${({ theme: { height } }) => height.xx2l}px;
                        }
                    `;
                case 'medium':
                    return css`
                        @media (max-width: ${tablet}px) {
                            height: ${({ theme: { height } }) => height.x4ll}px;
                        }
                    `;
                case 'small':
                    return css`
                        @media (max-width: ${mobileM}px) {
                            height: ${({ theme: { height } }) => height.x4ll}px;
                        }
                    `;
                case 'right text':
                    return css`
                        width: ${({ theme: { width } }) => width.lx}px;
                        height: ${({ theme: { height } }) => height.x3l}px;
                    `;
                case 'without description':
                    return css`
                        width: ${({ theme: { width } }) => width.lxx}px;

                        @media (max-width: ${tablet}px) {
                            width: ${({ theme: { width } }) => width.xxll}px;
                            height: ${({ theme: { height } }) => height.xss}px;
                        }
                    `;
                case 'no img':
                    return css`
                        display: none;
                    `;
                default:
                    return css``;
            }
        }}
    }
`;

export const DescriptionContainer = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sx}px;

    ${({ type }) => {
        switch (type) {
            case 'big':
                return css`
                    @media (max-width: ${tablet}px) {
                        gap: ${({ theme: { gap } }) => gap.s}px;
                    }
                `;
            case 'medium':
                return css`
                    @media (max-width: ${tablet}px) {
                        gap: ${({ theme: { gap } }) => gap.sx}px;
                        padding: ${({ theme: { padding } }) => padding.lm}px;
                        padding-top: ${({ theme: { padding } }) =>
                            padding.none};
                    }
                `;
            case 'small':
                return css`
                    @media (max-width: ${mobileM}px) {
                        gap: ${({ theme: { gap } }) => gap.s}px;
                    }
                `;
            case 'without description':
                return css`
                    @media (max-width: ${tablet}px) {
                        gap: ${({ theme: { gap } }) => gap.x}px;
                    }
                `;
            case 'no img':
                return css`
                    @media (max-width: ${mobileM}px) {
                        gap: ${({ theme: { gap } }) => gap.none}px;
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export const PublishDate = styled.div<{ type: string }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ type }) => {
        switch (type) {
            case 'no img':
                return css`
                    @media (max-width: ${mobileM}px) {
                        padding-bottom: ${({ theme: { padding } }) =>
                            padding.lmx}px;
                    }
                `;

            default:
                break;
        }
    }}
`;

export const CardTitle = styled.div<{ type: string }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    ${({ type }) => {
        switch (type) {
            case 'big':
                return css`
                    @media (max-width: ${tablet}px) {
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.xxl}px;
                    }
                `;
            case 'medium':
                return css`
                    @media (max-width: ${tablet}px) {
                        font-size: ${({ theme: { fontSize } }) =>
                            fontSize.xl}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                    }
                `;
            case 'small':
                return css`
                    @media (max-width: ${mobileM}px) {
                        font-size: ${({ theme: { fontSize } }) =>
                            fontSize.xl}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                    }
                `;
            case 'right text':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
                    line-height: ${({ theme: { lineHeight } }) =>
                        lineHeight.l}px;
                `;
            case 'without description':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
                    line-height: ${({ theme: { lineHeight } }) =>
                        lineHeight.l}px;
                    @media (max-width: ${tablet}px) {
                        font-weight: ${({ theme: { fontWeight } }) =>
                            fontWeight.xl};
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                    }
                `;
            case 'no img':
                return css`
                    @media (max-width: ${mobileM}px) {
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.xll}px;
                        padding-bottom: ${({ theme: { padding } }) =>
                            padding.lmm}px;
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export const MainTextSection = styled.div<{ type: string }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ type }) => {
        switch (type) {
            case 'big':
                return css`
                    @media (max-width: ${tablet}px) {
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;

                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                    }
                `;
            case 'medium':
                return css`
                    @media (max-width: ${tablet}px) {
                        display: none;
                    }
                `;
            case 'small':
                return css`
                    @media (max-width: ${mobileM}px) {
                        display: none;
                    }
                `;
            case 'without description':
                return css`
                    display: none;
                `;
            case 'no img':
                return css`
                    @media (max-width: ${mobileM}px) {
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                        padding-bottom: ${({ theme: { padding } }) =>
                            padding.lm}px;
                    }
                `;
            default:
                return css``;
        }
    }}
`;

export const ReadMore = styled.div<{ type: string }>`
    ${({ type }) => {
        switch (type) {
            case 'medium':
                return css`
                    display: none;
                `;
            case 'right text':
                return css`
                    display: none;
                `;
            case 'no img':
                return css`
                    display: none;
                `;
            default:
                return css``;
        }
    }}
`;

export const TagsContainer = styled.div<{ type: string }>`
    width: auto;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.ssl}px;

    ${({ type }) => {
        switch (type) {
            case 'big':
                return css`
                    display: none;
                `;
            case 'medium':
                return css`
                    @media (max-width: ${tablet}px) {
                        gap: ${({ theme: { gap } }) => gap.sx}px;
                    }
                `;
            case 'small':
                return css`
                    display: none;
                `;
            case 'right text':
                return css`
                    display: none;
                `;
            case 'without description':
                return css`
                    display: none;
                `;
            case 'no img':
                return css`
                    @media (max-width: ${tablet}px) {
                        gap: ${({ theme: { gap } }) => gap.x}px;
                    }
                `;

            default:
                return css``;
        }
    }}
`;
