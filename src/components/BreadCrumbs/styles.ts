import styled from 'styled-components';

export const BreadCrumbsWrapper = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;

export const BreadCrumbLink = styled.div`
    a {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
        color: ${({ theme: { colors } }) => colors.grey};
        text-decoration: none;
        cursor: pointer;
    }
`;

export const FinalyBreadCrumb = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.white};
`;
