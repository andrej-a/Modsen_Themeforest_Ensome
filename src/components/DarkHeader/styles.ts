import styled from 'styled-components';

import { size } from '@/types/constants';

const { laptop, tablet } = size;

export const FooterContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.secondary};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const FooterContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    margin-top: ${({ theme: { margin } }) => margin.lxx}px;
    padding-bottom: ${({ theme: { padding } }) => padding.x6l}px;
    gap: ${({ theme: { gap } }) => gap.x4l}px;
    border-bottom: ${({ theme: { border } }) => border.m};

    a {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.grey};
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: ${({ theme: { colors } }) => colors.beige};
        }
    }

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        padding: ${({ theme: { padding } }) => padding.s3s};
        gap: ${({ theme: { gap } }) => gap.sl}px;
        border-bottom: ${({ theme: { border } }) => border.none};
    }
`;

export const ContentDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sxx}px;
    margin-right: ${({ theme: { margin } }) => margin.m}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        flex-direction: row;
        justify-content: space-between;
    }
    @media (max-width: ${tablet}px) {
        flex-direction: column-reverse;
        align-items: flex-start;
        gap: ${({ theme: { gap } }) => gap.xxl}px;
    }
`;

export const ContentDescriptionText = styled.div`
    max-width: ${({ theme: { width } }) => width.x}px;
    @media (max-width: ${laptop}px) {
        display: none;
    }
`;

export const AdditionalInformation = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding: ${({ theme: { padding } }) => padding.m};

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        align-items: flex-start;
        padding-top: ${({ theme: { padding } }) => padding.none};
        padding-right: ${({ theme: { padding } }) => padding.lmm}px;
        padding-left: ${({ theme: { padding } }) => padding.lmm}px;
    }
`;

export const Policy = styled.div`
    width: auto;
    height: auto;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.xll}px;

    @media (max-width: ${laptop}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        gap: ${({ theme: { gap } }) => gap.sx}px;
        padding-bottom: ${({ theme: { padding } }) => padding.ll}px;
        border-bottom: ${({ theme: { border } }) => border.m};
    }
`;

export const Text = styled.p`
    @media (max-width: ${laptop}px) {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
        font-size: ${({ theme: { fontSize } }) => fontSize.x}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.tertiary};
    }
`;

export const CompanyInforWrapper = styled.div`
    padding-top: ${({ theme: { padding } }) => padding.ll}px;
`;
