import styled from 'styled-components';

export const Link = styled.a``;

export const LinksToPagesContainer = styled.div`
    min-width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const Title = styled.div`
    margin-bottom: ${({ theme: { margin } }) => margin.xs}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};
`;

export const PageLink = styled.p``;
export const Text = styled.p``;
