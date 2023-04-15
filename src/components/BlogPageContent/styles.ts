import styled from 'styled-components';

export const BlogPageContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.xxl}px;
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({ theme: { gap } }) => gap.ssl}px;
    row-gap: ${({ theme: { gap } }) => gap.xxl}px;
`;

export const LoadButtonWrapper = styled.div<{ isButtonVisible: boolean }>`
    display: ${({ isButtonVisible }) => (isButtonVisible ? '' : 'none')};
`;
