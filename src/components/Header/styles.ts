import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;
export const HeaderContainer = styled.div<{ background?: string }>`
    position: relative;
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    background: ${({ background, theme: { colors } }) =>
        background === 'primary' ? colors.background : colors[background!]};
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${tablet}px) {
        background: ${({ theme: { colors } }) => colors.white};
    }
`;
