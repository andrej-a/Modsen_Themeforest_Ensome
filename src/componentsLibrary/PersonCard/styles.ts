import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { tablet, mobileM } = size;

export const PersonCardContainer = styled.div<{ type: string }>`
    width: auto;
    height: auto;
    display: flex;

    ${({ type }) => {
        switch (type) {
            case 'with icon links':
                return css`
                    box-shadow: ${({ theme: { shadows } }) =>
                        shadows.shadowCard3};
                `;
            default:
                break;
        }
    }}
`;

export const PersonCardContent = styled.div<{ type: string }>`
    position: relative;
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sxx}px;

    ${({ type }) => {
        switch (type) {
            case 'horizontal':
                return css`
                    @media (max-width: ${tablet}px) {
                        padding: ${({ theme: { padding } }) => padding.s3s};
                        gap: ${({ theme: { gap } }) => gap.sx}px;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const PersonCardImage = styled.div<{ type: string }>`
    ${({ type }) => {
        switch (type) {
            case 'horizontal':
                return css`
                    img {
                        object-fit: cover;
                        width: ${({ theme: { width } }) => width.xxxl}px;
                        height: ${({ theme: { height } }) => height.xx1l}px;
                    }

                    @media (max-width: ${tablet}px) {
                        overflow: hidden;
                        width: ${({ theme: { width } }) => width.x1ll}px;
                        height: ${({ theme: { height } }) => height.x5l}px;
                        img {
                            width: ${({ theme: { width } }) => width.xxl}%;
                            height: ${({ theme: { height } }) => height.xll}px;
                            transform: ${({ theme: { translate } }) =>
                                css`translateY(${translate.s}px)`};
                        }
                    }
                `;
            case 'vertical':
                return css`
                    img {
                        width: ${({ theme: { width } }) => width.x1l}px;
                        height: ${({ theme: { height } }) => height.x3ll}px;
                    }

                    @media (max-width: ${mobileM}px) {
                        img {
                            width: ${({ theme: { width } }) => width.xxll}px;
                            height: ${({ theme: { height } }) => height.x4l}px;
                        }
                    }
                `;
            case 'with icon links':
                return css`
                    img {
                        width: ${({ theme: { width } }) => width.x1l}px;
                        height: ${({ theme: { height } }) => height.xx1}px;
                    }

                    @media (max-width: ${mobileM}px) {
                        img {
                            width: ${({ theme: { width } }) => width.xx2l}px;
                            height: ${({ theme: { height } }) => height.x5l}px;
                        }
                    }
                `;
            default:
                break;
        }
    }}
`;

export const MainInfoContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    padding: ${({ theme: { padding } }) => padding.s3s};

    a {
        text-decoration: none;
    }

    ${({ type }) => {
        switch (type) {
            case 'vertical':
                return css`
                    position: absolute;
                    bottom: ${({ theme: { bottom } }) => bottom.x}px;
                    left: ${({ theme: { left } }) => left.s}px;
                    padding: ${({ theme: { padding } }) => padding.none};

                    @media (max-width: ${mobileM}px) {
                        bottom: ${({ theme: { bottom } }) => bottom.xx}px;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const PersonInformation = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.xs}px;

    ${({ type }) => {
        switch (type) {
            case 'vertical':
                return css`
                    gap: ${({ theme: { gap } }) => gap.none};
                `;
            case 'horizontal':
                return css`
                    @media (max-width: ${tablet}px) {
                        gap: ${({ theme: { gap } }) => gap.none};
                    }
                `;
            case 'with icon links':
                return css`
                    @media (max-width: ${mobileM}px) {
                        gap: ${({ theme: { gap } }) => gap.none};
                        margin-bottom: ${({ theme: { margin } }) => margin.x}px;
                    }
                `;
            default:
                break;
        }
    }}
`;
export const PersonName = styled.div<{ type: string }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    ${({ type }) => {
        switch (type) {
            case 'vertical':
                return css`
                    color: ${({ theme: { colors } }) => colors.white};

                    @media (max-width: ${mobileM}px) {
                        font-weight: ${({ theme: { fontWeight } }) =>
                            fontWeight.xl};
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                        letter-spacing: ${({ theme: { letterSpacing } }) =>
                            letterSpacing.s}em;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const PersonPosition = styled.div<{ type: string }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ type }) => {
        switch (type) {
            case 'vertical':
                return css`
                    color: ${({ theme: { colors } }) => colors.white};
                    @media (max-width: ${mobileM}px) {
                        font-weight: ${({ theme: { fontWeight } }) =>
                            fontWeight.s};
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                        letter-spacing: ${({ theme: { letterSpacing } }) =>
                            letterSpacing.s}em;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const SocialContainer = styled.div<{ type: string }>`
    display: none;
    gap: ${({ theme: { gap } }) => gap.s}px;

    path {
        fill: ${({ theme: { colors } }) => colors.grey};
        cursor: pointer;

        &:hover {
            fill: ${({ theme: { colors } }) => colors.primary};
        }
    }

    @media (max-width: ${mobileM}px) {
        svg {
            width: ${({ theme: { width } }) => width.sl}px;
            height: ${({ theme: { height } }) => height.xs}px;
        }
    }

    ${({ type }) => {
        switch (type) {
            case 'with icon links':
                return css`
                    display: flex;
                `;
            default:
                break;
        }
    }}
`;

export const SocialLink = styled.a``;
