import styled from 'styled-components';

export const OverviewSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Overview = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    margin: ${({ theme: { margin } }) => margin.xxxl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxl}px;
`;

export const OverviewTitleContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const OverviewContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const OverviewProjects = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const OverviewDescription = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const OverviewClientsLogos = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
