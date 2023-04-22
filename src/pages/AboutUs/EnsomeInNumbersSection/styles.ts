import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const Container = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin: ${({ theme: { margin } }) => margin.x2l};
    gap: 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const StatisticContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;
`;
