import styled from 'styled-components';

export const RightSideBar = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.l1x}px;
    height: ${({ theme: { height } }) => height.xxl}%;

    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;
`;
