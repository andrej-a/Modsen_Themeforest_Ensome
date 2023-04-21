import styled from 'styled-components';

export const ComponentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.l1x}px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    text-align: left;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    &::after {
        content: '';
        display: block;
        width: ${({ theme: { width } }) => width.sxx}%;
        border: ${({ theme: { border } }) => border.xxl};
        margin-top: ${({ theme: { margin } }) => margin.xs}px;
    }
`;

export const DescriptionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    text-align: left;
    margin-top: ${({ theme: { margin } }) => margin.llx}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const ContactsListContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sx}px;
    margin-top: ${({ theme: { margin } }) => margin.l2x}px;
`;

export const ContactItem = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const ContactLink = styled.a`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
    cursor: pointer;
`;
