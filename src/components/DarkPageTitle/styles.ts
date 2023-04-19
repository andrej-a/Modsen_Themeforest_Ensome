import styled from 'styled-components';

export const DarkPagePreviewContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border-top: ${({ theme: { border } }) => border.m};
    background: ${({ theme: { colors } }) => colors.secondary};
`;

export const DarkPagePreviewContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: ${({ theme: { height } }) => height.x1l}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const BreadCrumb = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin-top: ${({ theme: { margin } }) => margin.l1x}px;
`;

export const DarkPagePreviewDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme: { margin } }) => margin.m}px;
`;

export const DarkPagePreviewTitle = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};
`;

export const Description = styled.div`
    max-width: ${({ theme: { width } }) => width.x1l}px;
    display: flex;
    align-items: center;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.background};
`;
