import styled, { css } from 'styled-components';

export const TestimonialsSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TestimonialCard = styled.div<{
    sizeOfTheScreen: number;
    countCardsOnThePage: number;
}>`
    min-width: ${({ sizeOfTheScreen, countCardsOnThePage }) =>
        css`calc(${sizeOfTheScreen}px / ${countCardsOnThePage})`};
    max-width: ${({ sizeOfTheScreen, countCardsOnThePage }) =>
        css`calc(${sizeOfTheScreen}px / ${countCardsOnThePage})`};
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
    padding: ${({ theme: { padding } }) => padding.x5l}px;
`;

export const TestimonialCardHeader = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
`;
export const AuthorAvatar = styled.div``;

export const AuthorInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const AuthorInformationName = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const AuthorInformationRole = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const TestimonialText = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;
