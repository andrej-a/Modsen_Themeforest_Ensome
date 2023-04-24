import styled from 'styled-components';

export const TagComponent = styled.div<{ isActive?: boolean }>`
    display: flex;
    border: ${({ theme: { border } }) => border.x};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    padding: ${({ theme: { padding } }) => padding.x}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    background: ${({ isActive, theme: { colors } }) =>
        isActive ? colors.primary : colors.white};
    color: ${({ isActive, theme: { colors } }) =>
        isActive ? colors.white : colors.primary};
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        background: ${({ theme: { colors } }) => colors.primary};
        color: ${({ theme: { colors } }) => colors.white};
    }
`;
