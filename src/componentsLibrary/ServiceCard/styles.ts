import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x1l}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    padding: ${({ theme: { padding } }) => padding.ms};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    box-shadow: ${({ theme: { shadows } }) => shadows.shadowCard3};
    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    padding: ${({ theme: { padding } }) => padding.x5l}px;
                `;
            case 'wide glass icon':
                return css`
                    max-width: ${({ theme: { width } }) => width.xxxl}px;
                    padding: ${({ theme: { padding } }) => padding.mx};
                    gap: ${({ theme: { gap } }) => gap.sxx}px;
                `;
            case 'small':
                return css`
                    max-width: ${({ theme: { width } }) => width.x2l}px;
                    padding: ${({ theme: { padding } }) => padding.lmx}px;
                    gap: ${({ theme: { gap } }) => gap.sx}px;
                `;

            default:
                break;
        }
    }}
`;

export const ImageContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    justify-content: center;
                `;
            default:
                break;
        }
    }}
`;

export const TitleContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: left;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    justify-content: center;
                    text-align: center;
                `;
            case 'small':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
                `;
            default:
                break;
        }
    }}
`;

export const DescriptionContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ type }) => {
        switch (type) {
            case 'center text':
                return css`
                    text-align: center;
                `;
            case 'small':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                    line-height: ${({ theme: { lineHeight } }) =>
                        lineHeight.l}px;
                `;
            default:
                break;
        }
    }}
`;

export const ReadMoreContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${({ type }) => {
        switch (type) {
            case 'right text':
                return css`
                    display: none;
                `;

            case 'center text':
                return css`
                    justify-content: center;
                `;
            case 'small':
                return css`
                    display: none;
                `;
            default:
                break;
        }
    }}
`;
