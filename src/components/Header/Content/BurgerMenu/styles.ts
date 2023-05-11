import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;
export const BurgerMenuContainer = styled.div`
    width: auto;
    height: auto;
    display: none;
    flex-direction: column;

    @media (max-width: ${tablet}px) {
        display: flex;
    }
`;
export const HandlerContainer = styled.div`
    cursor: pointer;
`;

export const MenuHandler = styled.div`
    position: relative;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};
    width: ${({ theme: { width } }) => width.sxx}px;
    height: ${({ theme: { height } }) => height.xxs}px;
    background: ${({ theme: { colors } }) => colors.primary};

    ::before,
    ::after {
        content: '';
        position: relative;
        top: ${({ theme: { top } }) => top.xxs}px;

        display: block;
        width: ${({ theme: { width } }) => width.sxx}px;
        height: ${({ theme: { height } }) => height.xxs}px;

        background: ${({ theme: { colors } }) => colors.primary};
    }

    ::after {
        top: ${({ theme: { top } }) => top.x3s}px;
    }
`;

export const DropDownContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-height: ${({ theme: { height } }) => height.x2s}vh;
    overflow-x: hidden;
    overflow-y: auto;
    padding: ${({ theme: { padding } }) => padding.s3s};
`;

export const Menu = styled.div<{ isMenuActive: boolean }>`
    position: absolute;
    top: ${({ theme: { top } }) => top.xs};
    left: ${({ isMenuActive, theme: { left } }) =>
        isMenuActive ? left.xs : left.l}px;
    z-index: ${({ theme: { zIndex } }) => zIndex.s};

    width: ${({ theme: { width } }) => width.xxl}vw;
    height: ${({ theme: { height } }) => height.xxl}vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    background: ${({ theme: { colors } }) => colors.white};
    path {
        cursor: pointer;
        fill: ${({ theme: { colors } }) => colors.primary};
        &:hover {
            fill: ${({ theme: { colors } }) => colors.secondary};
        }
    }
`;
