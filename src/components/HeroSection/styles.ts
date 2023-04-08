import styled from 'styled-components';

export const HeroSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    background: ${({ theme: { colors } }) => colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const HeroSectionContentContainer = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ theme: { margin } }) => margin.xl}%;
`;

export const HeroSectionTitleContainer = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.xl}%;
    height: auto;
    display: flex;
    align-items: center;
`;

export const HeroSectionTitle = styled.h1`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const ColoredWord = styled.span`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.primary};
`;

export const HeroSectionDescriptionContainer = styled(
    HeroSectionTitleContainer,
)`
    width: ${({ theme: { width } }) => width.l}%;
`;

export const HeroSectionDescription = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const HeroSectionImageContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    img {
        max-width: ${({ theme: { width } }) => width.xxl}%;
    }
`;
