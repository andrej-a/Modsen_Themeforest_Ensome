import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.s}px;
    padding-right: ${({ theme: { padding } }) => padding.x6l}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;

    ${({ type }) => {
        switch (type) {
            case 'variant 1':
                return css`
                    border-right: ${({ theme: { border } }) => border.xs};
                `;

            case 'variant 4':
                return css`
                    align-items: flex-start;
                    padding: ${({ theme: { padding } }) => padding.none};
                `;
            default:
                break;
        }
    }}
`;

export const Title = styled.div<{ color: string; type: string }>`
    display: flex;
    align-items: center;

    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xx3l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.xs}em;
    color: ${({ color, theme: { colors } }) => colors[color]};

    ${({ type }) => {
        switch (type) {
            case 'variant 4':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.x3l}px;
                `;
            default:
                break;
        }
    }}
`;

export const Description = styled.div<{ color: string; type: string }>`
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ color, theme: { colors } }) => colors[color]};

    ${({ type }) => {
        switch (type) {
            case 'variant 4':
                return css`
                    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
                `;
            default:
                break;
        }
    }}
`;
