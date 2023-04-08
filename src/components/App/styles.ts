import styled from 'styled-components';

export const ApplicationContainer = styled.div`
    width: auto;
    max-width: ${({ theme: { width } }) => width.xxl}vw;
    height: auto;
    min-height: ${({ theme: { height } }) => height.xxl}vh;
`;
