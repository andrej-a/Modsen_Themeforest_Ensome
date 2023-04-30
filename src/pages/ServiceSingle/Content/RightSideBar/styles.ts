import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;

export const RightSideBar = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.l1x}px;
    height: ${({ theme: { height } }) => height.xxl}%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;

    @media (max-width: ${tablet}px) {
        max-width: none;
        align-items: center;
    }
`;
