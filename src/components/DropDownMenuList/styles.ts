import styled from 'styled-components';

export const DropDownMenuListWrapper = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.s3s}px;
    gap: ${({ theme: { gap } }) => gap.sxx}px;
`;
