import styled from 'styled-components';

export const ModalWindowOverlay = styled.div`
    position: absolute;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};
    top: ${({ theme: { top } }) => top.xs};
    left: ${({ theme: { left } }) => left.xs};

    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: ${({ theme: { height } }) => height.xxl}%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme: { colors } }) => colors.transparentBlue};
    cursor: pointer;
`;

export const CloseModalWindowButton = styled.button`
    position: absolute;
    right: ${({ theme: { right } }) => right.l}px;
    top: ${({ theme: { top } }) => top.l}px;

    border-radius: ${({ theme: { borderRadius } }) => borderRadius.full}%;
    border: ${({ theme: { border } }) => border.none};
    background: transparent;
    cursor: pointer;
`;
