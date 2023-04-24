import styled from 'styled-components';

export const Container = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.background};
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    display: flex;
    flex-direction: column;
`;

export const ApplicationNavigation = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ theme: { padding } }) => padding.mxx};
    border-bottom: ${({ theme: { border } }) => border.xs};
`;

export const SwitcherContainer = styled.div`
    display: flex;
    flex-direction: column;

    gap: ${({ theme: { gap } }) => gap.sl}px;
`;
