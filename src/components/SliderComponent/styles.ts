import styled, { css } from 'styled-components';

export const SliderSectionContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.xxl}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
`;

export const SliderContentHeader = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxl}px;
`;

export const SliderContentTitle = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const SliderControls = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const SliderButton = styled.button<{ isDisabled: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.lx};

    background: ${({ theme: { colors } }) => colors.tertiary};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.xl}px;
    border: ${({ theme: { border } }) => border.none};
    cursor: pointer;

    img {
        opacity: ${({ theme: { opacity }, isDisabled }) =>
            isDisabled ? opacity.s : opacity.l};
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const Slider = styled.div`
    overflow: hidden;

    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const SliderCarousel = styled.div<{
    params: { index: number; childrensLength: number };
}>`
    width: ${({ params: { childrensLength } }) =>
        css`calc(1140px / 3 * ${childrensLength})`};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    transform: ${({ params: { index } }) => css`translateX(${index * 1140}px)`};
`;
