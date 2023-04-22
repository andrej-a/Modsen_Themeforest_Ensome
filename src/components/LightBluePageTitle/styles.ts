import styled from 'styled-components';

export const TitleContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const TitleContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${({ theme: { margin } }) => margin.x2l};
    gap: ${({ theme: { gap } }) => gap.sxx}px;
`;

export const Title = styled.div`
    max-width: ${({ theme: { width } }) => width.x3ll}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;
