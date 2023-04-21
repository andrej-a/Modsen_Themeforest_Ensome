import styled from 'styled-components';

export const LeftSidebar = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x3l}px;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;
`;
export const TextWithImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const ImageContainer = styled.div``;

export const ContentText = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    span {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.black};
    }
`;

export const SolutionCheckListContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;

    display: flex;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;
`;

export const CheckList = styled.div`
    ul {
        list-style-image: url('../logo/checkImage.png');
    }
    li {
        margin-bottom: ${({ theme: { margin } }) => margin.xs}px;

        font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.black};
    }
`;
