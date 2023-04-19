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
    gap: ${({ theme: { gap } }) => gap.sl}px;

    & > :nth-child(1) {
        position: relative;
        bottom: ${({ theme: { bottom } }) => bottom.s}px;
    }
    & > :nth-child(3) {
        position: relative;
        bottom: ${({ theme: { bottom } }) => bottom.s}px;
    }

    & > :nth-child(2) {
        position: relative;
        top: ${({ theme: { top } }) => top.s}px;
    }
    & > :nth-child(4) {
        position: relative;
        top: ${({ theme: { top } }) => top.s}px;
    }
`;
