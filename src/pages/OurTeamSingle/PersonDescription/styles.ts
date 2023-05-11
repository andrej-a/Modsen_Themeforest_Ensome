import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;
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
    display: flex;
    justify-content: center;
    align-items: flex-start;

    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin-top: ${({ theme: { margin } }) => margin.ml}px;

    @media (max-width: ${tablet}px) {
        flex-direction: column;
        align-items: center;
        margin: ${({ theme: { margin } }) => margin.none};
        gap: ${({ theme: { gap } }) => gap.s}px;
    }
`;

export const Photo = styled.div`
    width: ${({ theme: { width } }) => width.xxxl}px;
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        align-items: center;
        justify-content: center;
    }
`;

export const DescriptionContainer = styled.div`
    max-width: ${({ theme: { width } }) => width.xxxl}px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    gap: ${({ theme: { width } }) => width.sxx}px;
    border: 1px solid black;
`;

export const DescriptionData = styled.div`
    display: flex;
    flex-direction: column;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    color: ${({ theme: { colors } }) => colors.primary};
`;

export const Text = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;
    margin-top: ${({ theme: { margin } }) => margin.xss}px;
`;

export const SocialLink = styled.a`
    path {
        &:hover {
            fill: ${({ theme: { colors } }) => colors.primary};
        }
    }
`;
