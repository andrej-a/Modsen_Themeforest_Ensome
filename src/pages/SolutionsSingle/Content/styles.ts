import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptop, tablet } = size;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s3s};
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: ${({ theme: { margin } }) => margin.x3l};
    gap: ${({ theme: { gap } }) => gap.x2l}px;

    @media (max-width: ${tablet}px) {
        margin: ${({ theme: { margin } }) => margin.l1l};
    }
`;

export const TextContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x3l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    img {
        margin-bottom: ${({ theme: { margin } }) => margin.lx}px;

        @media (max-width: ${tablet}px) {
            width: ${({ theme: { width } }) => width.xxl}%;
        }
    }
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    margin-bottom: ${({ theme: { margin } }) => margin.lx}px;

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.x2l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xll}px;
        margin-bottom: ${({ theme: { margin } }) => margin.xs}px;
    }
`;

export const Description = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.grey};
    margin-bottom: ${({ theme: { margin } }) => margin.lxl}px;

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        margin-bottom: ${({ theme: { margin } }) => margin.llx}px;
    }
`;

export const TypesContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.xlx}px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: -${({ theme: { margin } }) => margin.l1x}px;
    margin-bottom: ${({ theme: { margin } }) => margin.lxl}px;
    padding: ${({ theme: { padding } }) => padding.s3s};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.grey};

    ul {
        list-style-image: url('../logo/type.png');
    }

    li {
        padding-left: ${({ theme: { padding } }) => padding.lm}px;
        margin-bottom: ${({ theme: { margin } }) => margin.s}px;

        @media (max-width: ${tablet}px) {
            margin-bottom: ${({ theme: { margin } }) => margin.xs}px;
        }
    }

    b {
        color: ${({ theme: { colors } }) => colors.black};
    }

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        margin-bottom: ${({ theme: { margin } }) => margin.llx}px;
        margin-top: -${({ theme: { margin } }) => margin.none};
    }
`;
