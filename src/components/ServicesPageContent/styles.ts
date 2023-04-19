import styled from 'styled-components';

export const ContentWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: ${({ theme: { margin } }) => margin.ml}px;
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
`;
