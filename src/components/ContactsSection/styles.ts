import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet, mobileL } = size;

export const ContactsSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s3s};
`;

export const ContactsSectionContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: ${({ theme: { margin } }) => margin.xxl};
    margin-top: ${({ theme: { margin } }) => margin.x}px;
    padding-left: ${({ theme: { padding } }) => padding.x}px;

    @media (max-width: ${tablet}px) {
        margin-bottom: ${({ theme: { margin } }) => margin.l3x}px;
    }
`;

export const BreadCrumbContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
`;

export const FormContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin-top: ${({ theme: { margin } }) => margin.m}px;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    display: flex;

    @media (max-width: ${tablet}px) {
        flex-direction: column;
        align-items: center;
        margin-top: ${({ theme: { margin } }) => margin.l1x}px;
        gap: ${({ theme: { gap } }) => gap.l}px;
    }
`;

export const Description = styled.div`
    width: ${({ theme: { width } }) => width.xll}%;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.x5l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.x8l}%;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    span {
        color: ${({ theme: { colors } }) => colors.primary};
    }

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        font-size: ${({ theme: { fontSize } }) => fontSize.x3l}px;
        text-align: center;
    }

    @media (max-width: ${mobileL}px) {
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
        font-size: ${({ theme: { fontSize } }) => fontSize.xxlll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const ContactsContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: flex-start;
    gap: ${({ theme: { gap } }) => gap.xxl}px;

    @media (max-width: ${tablet}px) {
        margin-top: ${({ theme: { margin } }) => margin.l1x}px;
    }

    @media (max-width: ${mobileL}px) {
        flex-direction: column;
        gap: ${({ theme: { gap } }) => gap.sxx}px;
    }
`;

export const ContactItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.x}px;
`;

export const ContactItem = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;

export const ContactText = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.black};
`;
export const ContactLink = styled.a`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
    text-decoration: none;
    cursor: pointer;
`;
