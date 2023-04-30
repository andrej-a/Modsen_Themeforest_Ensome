import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { mobileM } = size;

export const TestimonialCard = styled.div<{ type: string; size: string }>`
    position: relative;
    min-width: ${({ theme: { width } }) => width.x1l}px;
    max-width: ${({ theme: { width } }) => width.x1l}px;
    height: auto;

    display: flex;
    flex-direction: ${({ type }) =>
        type === 'image outside' ? 'column-reverse' : 'column'};
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.x5l}px;
    box-shadow: ${({ theme: { shadows } }) => shadows.shadowCard3};
    gap: ${({ theme: { gap } }) => gap.ssl}px;

    ${({ size }) => {
        switch (size) {
            case 'medium':
                return css`
                    min-width: ${({ theme: { width } }) => width.xxxl}px;
                    max-width: ${({ theme: { width } }) => width.xxxl}px;
                `;
            default:
                break;
        }
    }}
`;

export const TestimonialCardHeader = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
`;

export const AuthorAvatar = styled.div<{ type: string }>`
    ${({ type }) => {
        switch (type) {
            case 'image outside':
                return css`
                    position: absolute;
                    top: ${({ theme: { top } }) => top.x}px;
                `;
            default:
                break;
        }
    }}
`;

export const AuthorInformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const AuthorInformationName = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${mobileM}px) {
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    }
`;

export const AuthorInformationRole = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.l};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const TestimonialText = styled.div<{ type: string }>`
    margin-top: ${({ type, theme: { margin } }) =>
        type === 'image outside' ? margin.lxl : margin.none}px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    @media (max-width: ${mobileM}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    }
`;
