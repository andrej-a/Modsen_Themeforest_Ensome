import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileL, tablet } = size;
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

    @media (max-width: ${mobileL}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
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
        isExpanded ? margin.lx : 0}px;
    padding-right: ${({ theme: { padding } }) => padding.ml}px;
    opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
    overflow: hidden;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${tablet}px) {
        padding-right: ${({ theme: { padding } }) => padding.none};
        padding-left: ${({ theme: { padding } }) => padding.lm}px;
    }

    @media (max-width: ${mobileL}px) {
        margin-bottom: ${({ isExpanded, theme: { margin } }) =>
            isExpanded ? margin.x : 0}px;
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    }
`;
