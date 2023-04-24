import styled from 'styled-components';

export const MessageFormContainer = styled.div`
    width: ${({ theme: { width } }) => width.xll}%;
    height: auto;
    padding-top: ${({ theme: { padding } }) => padding.x5l}px;
`;

export const MessageForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: ${({ theme: { gap } }) => gap.sxx}px;

    input {
        border: ${({ theme: { border } }) => border.xl};
        border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;

        font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.black};
    }
`;

export const CustomerDataContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const InputWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xll}%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;
export const CustomerDataInput = styled.input`
    width: ${({ theme: { width } }) => width.xxl}%;
    padding: ${({ theme: { padding } }) => padding.xss};
`;

export const ThemeInput = styled(CustomerDataInput)`
    width: ${({ theme: { width } }) => width.xxl}%;
    padding: ${({ theme: { padding } }) => padding.xss};
`;

export const MessageInput = styled(CustomerDataInput)`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${({ theme: { padding } }) => padding.xss};
    padding-bottom: ${({ theme: { padding } }) => padding.x7l}px;
`;

export const SubmitButtonContainer = styled.div``;
