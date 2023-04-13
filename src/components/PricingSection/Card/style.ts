import styled, { css } from 'styled-components';

export const CardContainer = styled.div<{ isCardHover: boolean }>`
    width: auto;
    min-width: 255px;
    height: auto;
    min-height: 525px;
    gap: 30px;
    padding: 35px 20px;
    box-shadow: ${({ theme: { shadows } }) => shadows.shadowCard3};
    border-radius: 6px;
    cursor: pointer;
    background: ${({ isCardHover }) => (isCardHover ? '#185CFF' : '#fff')};

    &:hover {
        button {
            border-color: ${({ isCardHover }) =>
                isCardHover ? '#fff' : '#185CFF'};
        }
    }
`;

export const KindOfThePlan = styled.div<{ isCardHover: boolean }>`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: ${({ isCardHover }) => (isCardHover ? '#fff' : '#292d33')};
`;

export const CostAndTogglerContainer = styled.div<{ isCardHover: boolean }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: 800;
    font-size: 26px;
    line-height: 40px;
    letter-spacing: -0.015em;
    color: ${({ isCardHover }) => (isCardHover ? '#fff' : '#292d33')};
`;

export const TogglersContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const MonthToggler = styled.button<{
    period: string;
    isCardHover: boolean;
}>`
    min-width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    ${({ isCardHover, period }) => {
        if (period === 'Mo') {
            return css`
                background: ${isCardHover ? '#fff' : '#185CFF'};
                color: ${isCardHover ? '#185CFF' : '#fff'};
            `;
        }
        return css`
            background: ${isCardHover ? '#185CFF' : '#fff'};
            color: ${isCardHover ? '#fff' : '#185CFF'};
        `;
    }};
    border: ${({ theme: { border } }) => border.s};
    padding: 4px 10px;
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.01em;
    cursor: pointer;
`;

export const YearToggler = styled(MonthToggler)`
    ${({ isCardHover, period }) => {
        if (period === 'Yr') {
            return css`
                background: ${isCardHover ? '#fff' : '#185CFF'};
                color: ${isCardHover ? '#185CFF' : '#fff'};
            `;
        }
        return css`
            background: ${isCardHover ? '#185CFF' : '#fff'};
            color: ${isCardHover ? '#fff' : '#185CFF'};
        `;
    }};
`;

export const ChoosePlanButtonContainer = styled.div<{ isCardHover: boolean }>`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 30px 0;

    button {
        background: ${({ isCardHover }) => (isCardHover ? '#fff' : '#185CFF')};
        color: ${({ isCardHover }) => (isCardHover ? '#185CFF' : '#fff')};

        &:not(:disabled):hover {
            background: ${({ isCardHover }) =>
                isCardHover ? '#D7D7D7' : '#185CFF'};
            color: ${({ isCardHover }) => (isCardHover ? '#185CFF' : '#fff')};
        }
    }
`;

export const ServiceItem = styled.div<{ isCardHover: boolean }>`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    margin-bottom: 15px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: ${({ isCardHover }) => (isCardHover ? '#fff' : '#292d33')};
`;
