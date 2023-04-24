import styled from 'styled-components';

export const TagsContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;
