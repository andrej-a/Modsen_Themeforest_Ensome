import styled, { css } from 'styled-components';

export const ArchorLinksContainer = styled.div`
    position: sticky;
    top: ${({ theme: { top } }) => top.l}px;
    width: auto;
    min-width: ${({ theme: { width } }) => width.x2l}px;
    display: flex;
    flex-direction: column;
`;

export const ArchorLink = styled.a<{ isActive: boolean }>`
    padding: ${({ theme: { padding } }) => padding.x3s};
    border-left: ${({ theme: { border } }) => border.x3l};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
    cursor: pointer;

    ${({ isActive }) => {
        if (isActive) {
            return css`
                border-left: ${({ theme: { border } }) => border.x4l};
                font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
            `;
        }
    }}
`;
