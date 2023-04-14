import styled from 'styled-components';

export const HeaderContainer = styled.div<{ background?: string }>`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    background: ${({ background, theme: { colors } }) =>
        background === 'primary' ? colors.background : colors.secondary};
    display: flex;
    justify-content: center;
    align-items: center;
`;
