import styled from 'styled-components';

export const LogoContainer = styled.div`
    position: relative;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.img``;
