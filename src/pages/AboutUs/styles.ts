import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileL, tablet } = size;

export const MobileImageContainer = styled.div`
    display: none;

    @media (max-width: ${mobileL}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: ${({ theme: { margin } }) => margin.lx}px;
    }
`;
