import styled from 'styled-components';

export const ElasticContainer = styled.div`
    position: absolute;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};
    top: ${({ theme: { top } }) => top.m}%;

    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    max-height: ${({ theme: { height } }) => height.xxl}px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border: ${({ theme: { border } }) => border.xl};
    overflow: auto;
`;
