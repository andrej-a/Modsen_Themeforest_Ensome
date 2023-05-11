import styled from 'styled-components';

export const CardContainer = styled.div`
    width: auto;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Number = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.x3l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.xs}em;
    color: ${({ theme: { colors } }) => colors.primary};
`;

export const Description = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;
