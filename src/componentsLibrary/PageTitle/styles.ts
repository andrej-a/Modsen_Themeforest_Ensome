import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;
export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;

    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.l}px;
    }
`;

export const BreadCrumbsWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.lm}px;
`;

export const DescriptionWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.xx3l}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sx}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    font-style: normal;
    text-align: center;

    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.s}px;
    }
`;

export const SubTitle = styled.div`
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    color: ${({ theme: { colors } }) => colors.primary};
`;

export const Title = styled.div`
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    color: ${({ theme: { colors } }) => colors.black};

    @media (max-width: ${tablet}px) {
        padding: ${({ theme: { padding } }) => padding.s2s};
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const Description = styled.div<{ size: string }>`
    padding: ${({ theme: { padding } }) => padding.l}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.grey};

    ${({ size }) => {
        switch (size) {
            case 'low':
                return css`
                    max-width: ${({ theme: { width } }) => width.xxxl}px;

                    @media (max-width: ${tablet}px) {
                        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
                        line-height: ${({ theme: { lineHeight } }) =>
                            lineHeight.l}px;
                        letter-spacing: ${({ theme: { letterSpacing } }) =>
                            letterSpacing.x}em;
                    }
                `;
            case 'medium':
                return css`
                    max-width: ${({ theme: { width } }) => width.m}px;
                `;
            default:
                return css`
                    max-width: ${({ theme: { width } }) => width.xxxl}px;
                `;
        }
    }}
`;
