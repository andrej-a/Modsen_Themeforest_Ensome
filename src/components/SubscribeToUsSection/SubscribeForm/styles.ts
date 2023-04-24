import styled from 'styled-components';

export const SubscribeForm = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;

export const SubscribeInput = styled.input<{ isError: boolean }>`
    width: ${({ theme: { width } }) => width.l1x}px;
    padding: ${({ theme: { padding } }) => padding.sx};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    border: ${({ theme: { border } }) => border.none};
    background: ${({ theme: { colors }, isError }) =>
        isError ? colors.errorRed : colors.lightBlue};
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors }, isError }) =>
        isError ? colors.red : colors.black};

    &:focus {
        background: ${({ theme: { colors }, isError }) =>
            isError ? colors.errorRed : colors.beige};
        color: ${({ theme: { colors }, isError }) =>
            isError ? colors.red : colors.black};
        outline: none;
    }
    &:disabled {
        background: ${({ theme: { colors } }) => colors.beige};
    }
`;

export const SubmitButton = styled.input`
    position: absolute;
    right: ${({ theme: { right } }) => right.xs};
    top: ${({ theme: { top } }) => top.xs};
    padding: ${({ theme: { padding } }) => padding.xs};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    border: ${({ theme: { border } }) => border.none};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    cursor: pointer;
    background: ${({ theme: { colors } }) => colors.white};

    &:disabled {
        color: ${({ theme: { colors } }) => colors.lightGrey};
        cursor: not-allowed;
    }
`;

export const ValidationError = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.red};
`;
