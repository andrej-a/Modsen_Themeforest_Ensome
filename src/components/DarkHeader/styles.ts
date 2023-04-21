import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.secondary};
    border-top: ${({ theme: { border } }) => border.m};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const FooterContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    margin-top: ${({ theme: { margin } }) => margin.lxx}px;
    padding-bottom: ${({ theme: { padding } }) => padding.x6l}px;
    gap: ${({ theme: { gap } }) => gap.x4l}px;
    border-bottom: ${({ theme: { border } }) => border.m};

    a {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.grey};
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: ${({ theme: { colors } }) => colors.beige};
        }
    }
`;

export const ContentDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sxx}px;
    margin-right: ${({ theme: { margin } }) => margin.m}px;
`;

export const ContentDescriptionText = styled.div`
    max-width: ${({ theme: { width } }) => width.x}px;
`;

export const ContentLinks = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;
    path {
        cursor: pointer;
        &:hover {
            fill: ${({ theme: { colors } }) => colors.primary};
        }
    }
`;

export const Link = styled.a``;

export const QuickLinkContainer = styled.div`
    min-width: 80px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const ContactInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const Title = styled.div`
    margin-bottom: ${({ theme: { margin } }) => margin.xs}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};
`;

export const AdditionalInformation = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: ${({ theme: { padding } }) => padding.m};
`;

export const Policy = styled.div`
    width: auto;
    height: auto;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.xll}px;
`;

export const Text = styled.p``;

export const PageLink = styled.p``;
