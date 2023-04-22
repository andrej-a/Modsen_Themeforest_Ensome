import styled from 'styled-components';

export const NavigationContainer = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.x2l}px;
`;

export const NavigationItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.s}px;

    a {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: -0.015em;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.black};
        cursor: pointer;
        text-decoration: none;

        &:hover {
            color: ${({ theme: { colors } }) => colors.primary};
        }
    }
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;
