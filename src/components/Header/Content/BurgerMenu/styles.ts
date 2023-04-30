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
    z-index: 5;
    width: 20px;
    height: 2px;
    background: ${({ theme: { colors } }) => colors.primary};

    ::before,
    ::after {
        content: '';
        position: relative;
        display: block;
        width: 20px;
        height: 2px;
        background: ${({ theme: { colors } }) => colors.primary};
        top: 5px;
    }

    ::after {
        top: 8px;
    }
`;

export const DropDownContainer = styled.div`
    width: 100%;
    padding: 0 15px;
`;

export const Menu = styled.div<{ isMenuActive: boolean }>`
    position: absolute;
    top: 0;
    left: ${({ isMenuActive, theme: { left } }) =>
        isMenuActive ? left.xs : left.l}px;
    z-index: 3;

    width: ${({ theme: { width } }) => width.xxl}vw;
    height: ${({ theme: { height } }) => height.xxl}vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;

    background: ${({ theme: { colors } }) => colors.white};
    path {
        cursor: pointer;
        fill: ${({ theme: { colors } }) => colors.primary};
        &:hover {
            fill: ${({ theme: { colors } }) => colors.secondary};
        }
    }
`;
