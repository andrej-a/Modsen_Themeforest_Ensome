import styled from 'styled-components';

export const BlogPageContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
