import styled from 'styled-components';

export const VideoButtonContainer = styled.div`
    width: auto;
    height: auto;
`;

export const VideoButton = styled.button<{ btnType?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.xl};
    gap: ${({ theme: { gap } }) => gap.s}px;

    background: ${({ btnType, theme: { colors } }) =>
        btnType === 'secondary' ? colors.white : colors.primary};
    border: ${({ theme: { border } }) => border.none};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ btnType, theme: { colors } }) =>
        btnType === 'secondary' ? colors.secondary : colors.white};
    cursor: pointer;

    &:not(:disabled):hover {
        background: ${({ btnType, theme: { colors } }) =>
            btnType === 'secondary' ? colors.lightGrey : colors.primaryLight};
    }

    &:disabled {
        background: ${({ theme: { colors } }) => colors.grey};
        cursor: not-allowed;
    }
`;
