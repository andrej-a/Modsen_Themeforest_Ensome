import styled, { css } from 'styled-components';

export const BlogCardContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
`;

export const BlogCardContent = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
    ${({ type }) => {
        switch (type) {
            case 'big':
                return css`
                    width: ${({ theme: { width } }) => width.x3l}px;
                    flex-direction: column;
                `;
            case 'medium':
                return css`
                    width: ${({ theme: { width } }) => width.xxxl}px;
                    flex-direction: column;
                    gap: ${({ theme: { gap } }) => gap.none};
                    box-shadow: ${({ theme: { shadows } }) =>
                        shadows.shadowCard3};
                `;
            case 'small':
                return css`
                    width: ${({ theme: { width } }) => width.x1l}px;
                    flex-direction: column;
                `;
            case 'right text':
                return css`
                    width: ${({ theme: { width } }) => width.x3l}px;
                `;
            case 'without description':
                return css`
                    width: ${({ theme: { width } }) => width.l1x}px;
                `;
            case 'no img':
                return css`
                    width: ${({ theme: { width } }) => width.x1l}px;
                    box-shadow: ${({ theme: { shadows } }) =>
                        shadows.shadowCard3};
                    padding: ${({ theme: { padding } }) => padding.lxxx};
                `;
            default:
                return css``;
        }
    }}
`;

export const ImageContainer = styled.div<{ type: string }>`
    img {
        width: ${({ theme: { width } }) => width.xxl}%;
        ${({ type }) => {
            switch (type) {
                case 'right text':
                    return css`
                        width: ${({ theme: { width } }) => width.lx}px;
                    `;
                case 'without description':
                    return css`
                        width: ${({ theme: { width } }) => width.lxx}px;
                    `;
                case 'no img':
                    return css`
                        display: none;
                    `;
                default:
                    return css``;
            }
        }}
    }
`;

export const DescriptionContainer = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sx}px;

    ${({ type }) => {
        switch (type) {
            case 'medium':
                return css`
                    padding: ${({ theme: { padding } }) => padding.x4l};
                `;
            default:
                return css``;
        }
    }}
`;

export const PublishDate = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const CardTitle = styled.div<{ type: string }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    ${({ type }) => {
        switch (type) {
            case 'right text':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
                    line-height: ${({ theme: { lineHeight } }) =>
                        lineHeight.l}px;
                `;
            case 'without description':
                return css`
                    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
                    line-height: ${({ theme: { lineHeight } }) =>
                        lineHeight.l}px;
                `;
            default:
                return css``;
        }
    }}
`;

export const MainTextSection = styled.div<{ type: string }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ type }) => {
        switch (type) {
            case 'without description':
                return css`
                    display: none;
                `;
            default:
                return css``;
        }
    }}
`;

export const ReadMore = styled.div<{ type: string }>`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.primary};
    cursor: pointer;

    ${({ type }) => {
        switch (type) {
            case 'medium':
                return css`
                    display: none;
                `;
            case 'right text':
                return css`
                    display: none;
                `;
            case 'no img':
                return css`
                    display: none;
                `;
            default:
                return css``;
        }
    }}
`;

export const TagsContainer = styled.div<{ type: string }>`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.ssl}px;

    ${({ type }) => {
        switch (type) {
            case 'big':
                return css`
                    display: none;
                `;
            case 'small':
                return css`
                    display: none;
                `;
            case 'right text':
                return css`
                    display: none;
                `;
            case 'without description':
                return css`
                    display: none;
                `;

            default:
                return css``;
        }
    }}
`;

export const Tag = styled.div`
    border: ${({ theme: { border } }) => border.x};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    padding: ${({ theme: { padding } }) => padding.x}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.primary};
`;
