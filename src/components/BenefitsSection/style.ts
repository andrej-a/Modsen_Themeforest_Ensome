import styled from 'styled-components';

export const BenefitsSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme: { colors } }) => colors.background};
`;

export const BenefitsContentContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
`;

export const BenefitsDescription = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    height: auto;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const BenefitsDescriptionTitle = styled.p`
    width: ${({ theme: { width } }) => width.xxl}%;

    text-align: left;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const BenefitsDescriptionText = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const BenefitsCards = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > :nth-child(1) {
        margin-bottom: ${({ theme: { margin } }) => margin.lx}px;
    }
    & > :nth-child(3) {
        margin-bottom: ${({ theme: { margin } }) => margin.lxx}px;
    }

    & > :nth-child(2) {
        margin-top: ${({ theme: { margin } }) => margin.lxx}px;
    }
    & > :nth-child(4) {
        margin-top: ${({ theme: { margin } }) => margin.lx}px;
    }
`;

export const BenefitsCard = styled.div`
    width: ${({ theme: { width } }) => width.x2l}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${({ theme: { padding } }) => padding.x4l};

    background: ${({ theme: { colors } }) => colors.white};
    box-shadow: ${({ theme: { shadows } }) => shadows.shadowCard2};
`;

export const BenefitsCardImage = styled.div``;

export const BenefitsCardTitle = styled.div`
    margin-top: ${({ theme: { margin } }) => margin.x}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const BenefitsCardDescription = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;
