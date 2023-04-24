import styled from 'styled-components';

export const ApplicationContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    min-height: ${({ theme: { height } }) => height.xxl}vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;
