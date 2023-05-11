import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopM } = size;
export const Container = styled.div`
    @media (max-width: ${laptopM}px) {
        display: none;
    }
`;
