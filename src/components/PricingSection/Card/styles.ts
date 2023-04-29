import styled, { css } from 'styled-components';

import { size } from '@/types/constants';

const { mobileL } = size;
export const CardContainer = styled.div<{ isCardHover: boolean }>`
    width: auto;
    min-width: ${({ theme: { width } }) => width.x2l}px;
    height: auto;
    min-height: ${({ theme: { height } }) => height.xxxl}px;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    padding: ${({ theme: { padding } }) => padding.lxx};
    box-shadow: ${({ theme: { shadows } }) => shadows.shadowCard3};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    cursor: pointer;
    background: ${({ theme: { colors }, isCardHover }) =>
        isCardHover ? colors.primary : colors.white};

    &:hover {
        button {
            border-color: ${({ theme: { colors }, isCardHover }) =>
                isCardHover ? colors.white : colors.primary};
        }
    }

    @media (max-width: ${mobileL}px) {
        max-width: ${({ theme: { width } }) => width.xx2l}px;
        min-width: ${({ theme: { width } }) => width.xx2l}px;
    }
`;

export const KindOfThePlan = styled.div<{ isCardHover: boolean }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: ${({ theme: { margin } }) => margin.x}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors }, isCardHover }) =>
        isCardHover ? colors.white : colors.black};
`;

export const CostAndTogglerContainer = styled.div<{ isCardHover: boolean }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxlll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.lx2}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors }, isCardHover }) =>
        isCardHover ? colors.white : colors.black};

    @media (max-width: ${mobileL}px) {
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
        font-size: ${({ theme: { fontSize } }) => fontSize.x1l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    }
`;

export const TogglersContainer = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;

export const MonthToggler = styled.button<{
    period: string;
    isCardHover: boolean;
}>`
    min-width: ${({ theme: { width } }) => width.xlll}px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    ${({ theme: { colors }, isCardHover, period }) => {
        if (period === 'Mo') {
            return css`
                background: ${isCardHover ? colors.white : colors.primary};
                color: ${isCardHover ? colors.primary : colors.white};
            `;
        }
        return css`
            background: ${isCardHover ? colors.primary : colors.white};
            color: ${isCardHover ? colors.white : colors.primary};
        `;
    }};
    border: ${({ theme: { border } }) => border.s};
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    text-align: center;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.s}em;
    cursor: pointer;
`;

export const YearToggler = styled(MonthToggler)`
    ${({ theme: { colors }, isCardHover, period }) => {
        if (period === 'Yr') {
            return css`
                background: ${isCardHover ? colors.white : colors.primary};
                color: ${isCardHover ? colors.primary : colors.white};
            `;
        }
        return css`
            background: ${isCardHover ? colors.primary : colors.white};
            color: ${isCardHover ? colors.white : colors.primary};
        `;
    }};
`;

export const ChoosePlanButtonContainer = styled.div<{ isCardHover: boolean }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: center;
    margin: ${({ theme: { margin } }) => margin.x4l};

    button {
        background: ${({ theme: { colors }, isCardHover }) =>
            isCardHover ? colors.white : colors.primary};
        color: ${({ theme: { colors }, isCardHover }) =>
            isCardHover ? colors.primary : colors.white};

        &:not(:disabled):hover {
            background: ${({ theme: { colors }, isCardHover }) =>
                isCardHover ? colors.lightGrey : colors.primary};
            color: ${({ theme: { colors }, isCardHover }) =>
                isCardHover ? colors.primary : colors.white};
        }

        @media (max-width: ${mobileL}px) {
            font-weight: ${({ theme: { fontWeight } }) => fontWeight.xl};
            font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
            line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        }
    }
`;

export const ServiceItem = styled.div<{ isCardHover: boolean }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;
    gap: ${({ theme: { gap } }) => gap.s}px;
    margin-bottom: ${({ theme: { margin } }) => margin.xs}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors }, isCardHover }) =>
        isCardHover ? colors.white : colors.black};
`;
