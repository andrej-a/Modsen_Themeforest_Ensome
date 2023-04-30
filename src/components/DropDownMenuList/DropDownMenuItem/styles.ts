import styled, { css } from 'styled-components';

export const DropDownContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    border-bottom: ${({ theme: { border } }) => border.xl};
`;

export const MenuTrigger = styled.div<{ type: string; isExpanded: boolean }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding-bottom: ${({ theme: { padding } }) => padding.lmm}px; */

    cursor: pointer;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ type, theme: { colors } }) =>
        type === 'dark' ? colors.black : colors.white};

    ${({ isExpanded }) => {
        if (isExpanded) {
            return css`
                img {
                    transform: rotateZ(180deg);
                }
            `;
        }
    }}
`;

export const MenuContent = styled.div<{
    isExpanded: boolean;
    currentHeight: string;
}>`
    overflow: hidden;

    width: ${({ theme: { width } }) => width.xxl}%;
    height: ${({ currentHeight, isExpanded, theme: { height } }) =>
        isExpanded ? currentHeight : height.x};
    display: flex;
    flex-direction: column;
    margin: ${({ isExpanded, theme: { margin } }) =>
        isExpanded ? margin.lx : margin.none}px;
    margin-top: ${({ theme: { margin } }) => margin.xs}px;
    gap: ${({ theme: { gap } }) => gap.sx}px;

    opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
    text-align: left;
`;

export const LinkToPage = styled.div<{ type: string }>`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;
    padding-left: ${({ theme: { padding } }) => padding.lmm}px;

    a {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
        color: ${({ type, theme: { colors } }) =>
            type === 'dark' ? colors.black : colors.tertiary};
    }
`;
