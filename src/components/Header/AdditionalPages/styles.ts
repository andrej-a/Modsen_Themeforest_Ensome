import styled, { css } from 'styled-components';

export const ContentContainer = styled.div<{ isShow: boolean }>`
    position: absolute;
    top: ${({ theme: { top } }) => top.x2s}px;
    left: ${({ theme: { left } }) => left.xs};
    z-index: ${({ theme: { zIndex } }) => zIndex.m};

    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.secondary};

    ${({ isShow }) => {
        if (isShow) {
            return css`
                top: ${({ theme: { top } }) => top.xs};
            `;
        }
    }}
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    min-height: ${({ theme: { height } }) => height.x2ll}px;
    display: flex;
    justify-content: center;
    align-items: center;

    gap: ${({ theme: { gap } }) => gap.xxl}px;
`;

export const LinkToPage = styled.div<{ isActive: boolean }>`
    border-bottom: ${({ isActive, theme: { border } }) =>
        isActive ? border.ml : border.none};
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};

    &:hover {
        border-bottom: ${({ theme: { border } }) => border.ml};
    }
`;
