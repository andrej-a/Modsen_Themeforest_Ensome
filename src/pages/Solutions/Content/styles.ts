import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
`;
