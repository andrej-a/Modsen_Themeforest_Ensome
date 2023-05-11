import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, tablet } = size;
export const MainContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const MainContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${laptopM}px) {
        flex-direction: column;
        align-items: center;
        margin: ${({ theme: { margin } }) => margin.ll};
    }
`;
export const RightSideBar = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;

    @media (max-width: ${laptopM}px) {
        align-items: center;
    }
    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.sl}px;
    }
`;

export const LeftSideBar = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;

    @media (max-width: ${laptopM}px) {
        align-items: center;
    }

    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.sl}px;
    }
`;
