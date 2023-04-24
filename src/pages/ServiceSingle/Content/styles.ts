import styled from 'styled-components';

export const SinglePageContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SinglePageContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
`;
