import styled from 'styled-components';

export const MapSectionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    height: ${({ theme: { height } }) => height.x2l}px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;
