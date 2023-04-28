import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptopM } = size;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s3s};
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    margin-top: ${({ theme: { margin } }) => margin.ml}px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${laptopM}px) {
        margin-top: ${({ theme: { margin } }) => margin.l3x}px;
    }
`;

export const DescriptionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;

    @media (max-width: ${laptopM}px) {
        align-items: center;
    }
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const Description = styled.div`
    max-width: ${({ theme: { width } }) => width.l1x}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const CustomersContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;

    @media (max-width: ${laptopM}px) {
        justify-content: center;
        img {
            width: ${({ theme: { width } }) => width.xxl}px;
        }
    }
`;
