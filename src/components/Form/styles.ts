import styled, { css } from 'styled-components';

export const ServiceFormContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    height: ${({ theme: { height } }) => height.xxl}%;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const FormComponent = styled.form<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    ${({ type }) => {
        switch (type) {
            case 'column':
                return css`
                    button {
                        margin-top: ${({ theme: { margin } }) => margin.lxl}px;
                    }
                `;
            default:
                break;
        }
    }}
`;

export const InputComponent = styled.input<{ error: string | undefined }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    padding: ${({ theme: { padding } }) => padding.x}px;
    padding-left: ${({ theme: { padding } }) => padding.none};
    border: ${({ theme: { border } }) => border.none};
    border-bottom: ${({ theme: { border } }) => border.xl};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    background: transparent;

    &:focus {
        outline: none;
        border-bottom: ${({ theme: { border } }) => border.s};
    }

    ${({ error }) => {
        if (error) {
            return css`
                border-bottom: ${({ theme: { border } }) => border.xll};
                color: ${({ theme: { colors } }) => colors.red};
            `;
        }
    }}
`;

export const LabelComponent = styled.label<{ error: string | undefined }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.x}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ error }) => {
        if (error) {
            return css`
                color: ${({ theme: { colors } }) => colors.red};
            `;
        }
    }}
`;

export const InputContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const InputGroup = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    ${({ type }) => {
        switch (type) {
            case 'column':
                return css`
                    flex-direction: column;
                `;
            default:
                break;
        }
    }}
`;
