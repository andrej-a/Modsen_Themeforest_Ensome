import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet, mobileM } = size;
export const ComponentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.l1x}px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    text-align: left;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    &::after {
        content: '';
        display: block;
        width: ${({ theme: { width } }) => width.sxx}%;
        border: ${({ theme: { border } }) => border.xxl};
        margin-top: ${({ theme: { margin } }) => margin.xs}px;
    }

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    }

    @media (max-width: ${mobileM}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.xxlll}px;
    }
`;

export const DescriptionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    text-align: left;
    margin-top: ${({ theme: { margin } }) => margin.llx}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${tablet}px) {
        margin-top: ${({ theme: { margin } }) => margin.s}px;
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    }
`;

export const ContactsListContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sx}px;
    margin-top: ${({ theme: { margin } }) => margin.l2x}px;

    @media (max-width: ${tablet}px) {
        margin-top: ${({ theme: { margin } }) => margin.s}px;
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    }
`;

export const ContactItem = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const ContactLink = styled.a`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
    cursor: pointer;
`;
