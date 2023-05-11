import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileM } = size;
export const OurBlogContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${mobileM}px) {
        display: none;
    }
`;
