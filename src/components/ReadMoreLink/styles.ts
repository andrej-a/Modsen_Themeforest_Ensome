import styled, { css } from 'styled-components';

export const ReadMoreContainer = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;

    a {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
        color: ${({ theme: { colors } }) => colors.primary};
        text-decoration: none;
        cursor: pointer;
    }
`;
