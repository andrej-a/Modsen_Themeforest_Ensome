import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;

export const Container = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};

    @media (max-width: ${tablet}px) {
        padding-top: 40px;
    }
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-direction: column;

    path {
        cursor: pointer;
        fill: ${({ theme: { colors } }) => colors.primary};
    }
`;

export const ApplicationNavigation = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ theme: { padding } }) => padding.mxx};
    border-bottom: ${({ theme: { border } }) => border.xs};

    @media (max-width: ${tablet}px) {
        padding: ${({ theme: { padding } }) => padding.s3s};
        flex-direction: column;
    }
`;

export const MobileDropDownContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin-top: ${({ theme: { margin } }) => margin.lx}px;
`;

export const SwitcherContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme: { gap } }) => gap.sl}px;

    @media (max-width: ${tablet}px) {
        width: ${({ theme: { width } }) => width.xxl}%;
        flex-direction: column-reverse;
        align-items: flex-start;
    }
`;

export const AdditionalInfo = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    padding: ${({ theme: { padding } }) => padding.s3s};

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const PrivacyContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;
    border-bottom: ${({ theme: { border } }) => border.xl};
    padding-bottom: ${({ theme: { padding } }) => padding.ll}px;
    margin-bottom: ${({ theme: { margin } }) => margin.x2s}px;
`;
