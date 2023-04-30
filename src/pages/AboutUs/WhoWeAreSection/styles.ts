import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, tablet } = size;
export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-direction: column;
    margin-top: ${({ theme: { margin } }) => margin.mll}px;
    margin-bottom: ${({ theme: { margin } }) => margin.ml}px;
    gap: ${({ theme: { gap } }) => gap.x2l}px;
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${laptopM}px) {
        gap: ${({ theme: { gap } }) => gap.xxl}px;
        margin: ${({ theme: { margin } }) => margin.l1l};
    }
`;

export const DescriptionContainer = styled.div<{ isReflect?: boolean }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: ${({ isReflect }) => (isReflect ? 'row-reverse' : 'row')};
    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${laptopM}px) {
        flex-direction: column;
    }
    @media (max-width: ${tablet}px) {
        img {
            width: ${({ theme: { width } }) => width.xxl}%;
        }
    }
`;

export const DescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
`;

export const Title = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const Description = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${laptopM}px) {
        width: ${({ theme: { width } }) => width.x3ll}px;
    }
    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
    }
`;
