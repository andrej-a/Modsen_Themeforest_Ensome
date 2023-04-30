import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { laptopM, laptop } = size;
export const DarkPagePreviewContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    border-top: ${({ theme: { border } }) => border.m};
    background: ${({ theme: { colors } }) => colors.secondary};

    @media (max-width: ${laptopM}px) {
        padding: 0 15px;
    }
`;

export const DarkPagePreviewContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    min-height: ${({ theme: { height } }) => height.x1l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.x2l}px;

    @media (max-width: ${laptop}px) {
        gap: ${({ theme: { gap } }) => gap.l}px;
    }
`;

export const BreadCrumb = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    margin-top: ${({ theme: { margin } }) => margin.l1x}px;
`;

export const DarkPagePreviewDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: ${({ theme: { margin } }) => margin.m}px;

    @media (max-width: ${laptop}px) {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }
`;

export const DarkPagePreviewTitle = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};
`;

export const Description = styled.div<{ descriptionSize: string }>`
    max-width: ${({ theme: { width } }) => width.x1l}px;
    display: flex;
    align-items: center;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.background};

    ${({ descriptionSize }) => {
        switch (descriptionSize) {
            case 'medium':
                return css`
                    max-width: ${({ theme: { width } }) => width.xxxl}px;
                `;
            default:
                break;
        }
    }}
`;
