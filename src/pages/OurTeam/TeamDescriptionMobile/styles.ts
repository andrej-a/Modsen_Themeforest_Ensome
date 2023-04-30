import styled from 'styled-components';

import { size } from '@/types/constants';

const { mobileM } = size;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: none;
    justify-content: center;
    align-items: center;
    margin: ${({ theme: { margin } }) => margin.l1l};

    @media (max-width: ${mobileM}px) {
        display: flex;
    }
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.l}px;
`;

export const ImageContainer = styled.div`
    img {
        width: ${({ theme: { width } }) => width.xxl}vw;
    }
`;

export const Description = styled.div`
    padding: ${({ theme: { padding } }) => padding.s3s};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;
