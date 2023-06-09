import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileL } = size;

export const AccordionTrigger = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.x2s}px;
    border-bottom: ${({ theme: { border } }) => border.xl};

    cursor: pointer;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    &:hover {
        img {
            transform: rotateZ(90deg);
        }
    }

    @media (max-width: ${mobileL}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        padding: ${({ theme: { padding } }) => padding.sx};
    }
`;

export const AccordeonDescription = styled.div<{
    isExpanded: boolean;
    currentHeight: string;
}>`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: ${({ currentHeight, isExpanded, theme: { height } }) =>
        isExpanded ? currentHeight : height.x};
    opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
    overflow: hidden;
    text-align: left;
    padding: ${({ theme: { padding } }) => padding.x}px;
    transition: all 0.3s ease;
`;
