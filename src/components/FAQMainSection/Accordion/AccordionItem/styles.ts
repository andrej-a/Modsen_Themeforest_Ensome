import styled from 'styled-components';

export const AccodrionItem = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: ${({ theme: { border } }) => border.xl};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
`;

export const Question = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
`;

export const Text = styled.div<{
    isExpanded: boolean;
}>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    margin: ${({ theme: { margin } }) => margin.x5l};

    color: ${({ isExpanded, theme: { colors } }) =>
        isExpanded ? colors.primary : colors.black};
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    cursor: pointer;

    &:hover {
        img {
            transform: rotateZ(360deg);
        }
    }
`;

export const Answer = styled.div<{
    isExpanded: boolean;
    currentHeight: string;
}>`
    width: ${({ theme: { width } }) => width.xx1l}%;
    height: ${({ currentHeight, isExpanded, theme: { height } }) =>
        isExpanded ? currentHeight : height.x};
    margin: ${({ theme: { margin } }) => margin.x6l};
    margin-bottom: ${({ isExpanded, theme: { margin } }) =>
        isExpanded ? margin.lx : 0};
    opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
    overflow: hidden;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;
