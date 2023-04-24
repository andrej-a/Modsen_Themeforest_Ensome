import styled from 'styled-components';

export const ComponentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.x2l}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
`;
