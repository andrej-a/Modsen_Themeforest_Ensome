import styled from 'styled-components';

export const DefaultButtonWrapper = styled.div`
    width: auto;
    height: auto;
`;

export const DefaultButtonElement = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.xxxl};

    background: ${({ theme: { colors } }) => colors.primary};
    border: ${({ theme: { border } }) => border.none};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.white};
    box-shadow: ${({ theme: { shadows } }) => shadows.shadowButton};
    cursor: pointer;

    &:not(:disabled):hover {
        background: ${({ theme: { colors } }) => colors.primaryLight};
    }

    &:disabled {
        background: ${({ theme: { colors } }) => colors.grey};
        cursor: not-allowed;
    }
`;
