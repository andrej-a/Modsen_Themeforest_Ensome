import styled from 'styled-components';

export const FeatureSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const PlatformDescriptionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PlatformDescription = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
    height: auto;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const PlatformDescriptionTitle = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.x4l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.x4l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    span {
        color: ${({ theme: { colors } }) => colors.primary};
    }
`;

export const TextContainer = styled.div`
    width: auto;
    max-width: 495px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const PlatformDescriptionText = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const PlatformInformationContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xl}px;
    background: ${({ theme: { colors } }) => colors.background};
`;

export const PlatformInformationImage = styled.div``;

export const PlatformInformationText = styled.div`
    width: ${({ theme: { width } }) => width.xll}%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    p {
        max-width: ${({ theme: { width } }) => width.xxxl}px;
    }
`;

export const PlatformInformationTextTitle = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const PlatformInformationTextDescription = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;
