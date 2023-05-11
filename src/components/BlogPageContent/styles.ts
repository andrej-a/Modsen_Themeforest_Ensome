import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet, mobileM } = size;
export const BlogPageContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxl}px;

    @media (max-width: ${tablet}px) {
        margin: ${({ theme: { margin } }) => margin.l1l};
    }

    @media (max-width: ${mobileM}px) {
        gap: ${({ theme: { gap } }) => gap.sl}px;
    }
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({ theme: { gap } }) => gap.ssl}px;
    row-gap: ${({ theme: { gap } }) => gap.xxl}px;

    @media (max-width: ${mobileM}px) {
        gap: ${({ theme: { gap } }) => gap.sl}px;
    }
`;

export const LoadButtonWrapper = styled.div<{ isButtonVisible: boolean }>`
    display: ${({ isButtonVisible }) => (isButtonVisible ? '' : 'none')};
    @media (max-width: ${mobileM}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        padding: ${({ theme: { padding } }) => padding.s3s};
        button {
            width: ${({ theme: { width } }) => width.xxl}%;
            padding: ${({ theme: { padding } }) => padding.x2ss};
        }
    }
`;
