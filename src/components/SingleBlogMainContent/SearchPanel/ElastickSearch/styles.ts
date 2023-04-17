import styled from 'styled-components';

export const ElasticContainer = styled.div`
    position: absolute;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};
    top: ${({ theme: { top } }) => top.m}%;

    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    max-height: ${({ theme: { height } }) => height.xxl}px;
    display: flex;
    justify-content: center;
    border: ${({ theme: { border } }) => border.xl};
    overflow: auto;
`;

export const ElasticItem = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    border-bottom: ${({ theme: { border } }) => border.xl};
    background: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.primary};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    cursor: pointer;

    &:hover {
        background: ${({ theme: { colors } }) => colors.primary};
        color: ${({ theme: { colors } }) => colors.white};
    }
`;
