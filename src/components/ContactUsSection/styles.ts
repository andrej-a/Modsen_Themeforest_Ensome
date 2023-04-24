import styled from 'styled-components';

export const ContactUsContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const ContactUsContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.x2l};
`;

export const ContactUsTitle = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const ContactUsDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    text-align: center;
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;
