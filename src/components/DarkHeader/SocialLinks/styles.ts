import styled from 'styled-components';

export const ContentLinks = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;
    path {
        cursor: pointer;
        &:hover {
            fill: ${({ theme: { colors } }) => colors.primary};
        }
    }
`;
export const Link = styled.a``;
