import styled from 'styled-components';

export const PrivacyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${({ theme: { margin } }) => margin.l};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const CompanyInfo = styled.div``;

export const CompanyDescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.x3l}px;
`;

export const CompanyDescription = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.x}px;
`;
