import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, tablet } = size;

export const ContentContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ theme: { margin } }) => margin.l};
    gap: ${({ theme: { gap } }) => gap.x4l}px;
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${laptopM}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        justify-content: center;
        gap: ${({ theme: { gap } }) => gap.sl}px;
    }

    @media (max-width: ${tablet}px) {
        justify-content: space-between;
        margin-top: ${({ theme: { margin } }) => margin.x}px;
        margin-bottom: ${({ theme: { margin } }) => margin.x}px;
    }
`;

export const MenuContainer = styled.div`
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme: { gap } }) => gap.l}px;

    a {
        text-decoration: none;
    }

    @media (max-width: ${tablet}px) {
        display: none;
    }
`;

export const MenuItem = styled.h6<{ type?: string; isActive: boolean }>`
    position: relative;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ type, theme: { colors } }) =>
        type === 'secondary' ? colors.white : colors.grey};
    cursor: pointer;

    ${({ isActive, type }) => {
        if (isActive) {
            switch (type) {
                case 'secondary':
                    return css`
                        border-bottom: ${({ theme: { border } }) => border.ml};
                    `;
                default:
                    break;
            }
        }
        if (isActive && type !== 'secondary') {
            return css`
                color: ${({ theme: { colors } }) => colors.black};
                font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
            `;
        }
    }}

    path {
        cursor: pointer;
        fill: ${({ type, theme: { colors } }) =>
            type === 'secondary' ? colors.white : colors.grey};
    }

    &:hover {
        color: ${({ type, theme: { colors } }) =>
            type === 'secondary' ? colors.lightGrey : colors.black};
    }
`;

export const ShowPagesContainer = styled.div`
    position: absolute;
    top: ${({ theme: { top } }) => top.xs};
    right: ${({ theme: { right } }) => right.s}px;
`;
