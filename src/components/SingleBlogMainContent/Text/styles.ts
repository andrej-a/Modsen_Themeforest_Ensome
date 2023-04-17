import styled from 'styled-components';

export const TextWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xl}%;
    max-width: ${({ theme: { width } }) => width.x3l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const ImageWrapper = styled.div`
    margin-bottom: ${({ theme: { margin } }) => margin.s}px;

    img {
        width: ${({ theme: { width } }) => width.x3l}px;
        height: ${({ theme: { height } }) => height.xl}px;
    }
`;

export const MetaDataContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    column-gap: ${({ theme: { gap } }) => gap.sl}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const MetaDataItem = styled.div`
    display: flex;
    align-items: center;
    column-gap: ${({ theme: { gap } }) => gap.s}px;
    white-space: nowrap;

    svg {
        display: flex;
        align-items: flex-end;

        width: ${({ theme: { width } }) => width.sx}px;
        height: ${({ theme: { height } }) => height.ssx}px;
    }

    path {
        fill: ${({ theme: { colors } }) => colors.grey};
        cursor: pointer;
        &:hover {
            fill: ${({ theme: { colors } }) => colors.primary};
        }
    }
`;

export const PostTitle = styled.div`
    margin-top: ${({ theme: { margin } }) => margin.l1x}px;
    margin-bottom: ${({ theme: { margin } }) => margin.lx}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const PostContent = styled.div`
    margin-bottom: ${({ theme: { margin } }) => margin.lx}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
    a {
        color: ${({ theme: { colors } }) => colors.primary};
        text-decoration: none;
    }
`;

export const SelectedTextContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: flex-end;
`;

export const SelectedText = styled.div`
    width: ${({ theme: { width } }) => width.xxxl}px;
    padding-left: ${({ theme: { padding } }) => padding.ml}px;
    border-left: ${({ theme: { border } }) => border.xxl};
    margin-bottom: ${({ theme: { margin } }) => margin.lx}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;
