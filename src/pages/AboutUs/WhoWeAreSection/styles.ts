import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme: { margin } }) => margin.mll}px;
    margin-bottom: ${({ theme: { margin } }) => margin.ml}px;
    gap: ${({ theme: { gap } }) => gap.x2l}px;
`;

export const DescriptionContainer = styled.div<{ isReflect?: boolean }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: ${({ isReflect }) => (isReflect ? 'row-reverse' : 'row')};
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const DescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
`;

export const Title = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const Description = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.grey};
`;
