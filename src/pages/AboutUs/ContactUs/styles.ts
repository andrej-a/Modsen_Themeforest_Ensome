import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.x2l}px;
    margin: ${({ theme: { margin } }) => margin.ml}px;
`;

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.x3l}px;
`;

export const InformationDescriptionContainer = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.ssl}px;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const Description = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
`;

export const ContactsData = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.x}px;
`;

export const Contact = styled.a`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
    cursor: pointer;

    &:hover {
        color: ${({ theme: { colors } }) => colors.primary};
    }
`;
