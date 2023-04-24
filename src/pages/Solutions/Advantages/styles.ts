import styled from 'styled-components';

export const AdvantagesContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}%;
    display: flex;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const AdvantagesContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
`;

export const AdvantagesImage = styled.div``;

export const AdvantagesDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: ${({ theme: { padding } }) => padding.x6l}px;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const Title = styled.div`
    margin-bottom: ${({ theme: { margin } }) => margin.x}px;

    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
`;

export const AdvantagesItem = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;

    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const AdvantagesItemTitle = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;

    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
`;

export const AdvantagesItemDescription = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    color: ${({ theme: { colors } }) => colors.grey};
`;
