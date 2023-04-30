import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileM } = size;
export const ComponentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: none;
    justify-content: center;
    align-items: center;

    @media (max-width: ${mobileM}px) {
        display: flex;
    }
`;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    padding: ${({ theme: { padding } }) => padding.s3s};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin-bottom: ${({ theme: { margin } }) => margin.l3x}px;
    a {
        text-decoration: none;
    }
`;

export const Title = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 40px;
    letter-spacing: -0.015em;
    color: #292d33;
`;

export const BlogCardsContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sxx}px;
`;

export const ButtonContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    button {
        width: ${({ theme: { width } }) => width.xxl}%;
        padding: ${({ theme: { padding } }) => padding.x2ss};
    }
`;
