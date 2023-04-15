import styled from 'styled-components';

export const ContactsSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContactsSectionContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: ${({ theme: { margin } }) => margin.xxl};
    margin-top: ${({ theme: { margin } }) => margin.x}px;
    padding-left: ${({ theme: { padding } }) => padding.lm}px;
`;

export const BreadCrumbContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
`;

export const FormContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin-top: ${({ theme: { margin } }) => margin.m}px;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    display: flex;
`;

export const Description = styled.div`
    width: ${({ theme: { width } }) => width.xll}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.x5l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.x8l}%;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    span {
        color: ${({ theme: { colors } }) => colors.primary};
    }
`;

export const ContactsContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: flex-start;
    gap: ${({ theme: { gap } }) => gap.xxl}px;
`;

export const ContactItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.x}px;
`;

export const ContactItem = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;

export const ContactText = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.black};
`;
export const ContactLink = styled.a`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
    text-decoration: none;
    cursor: pointer;
`;
