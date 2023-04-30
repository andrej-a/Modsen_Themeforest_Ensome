import styled, { css } from 'styled-components';

export const Person = styled.div<{ pos: boolean; isShow: boolean }>`
    position: relative;

    opacity: 0;
    cursor: pointer;

    ${({ pos, isShow }) => {
        if (pos) {
            return css`
                top: ${({ theme: { top } }) => top.xss}px;
                opacity: ${({ isShow, theme: { opacity } }) =>
                    isShow ? opacity.l : opacity.x};
                transition: all 1s ease-in-out;
            `;
        }

        if (isShow) {
            return css`
                opacity: ${({ theme: { opacity } }) => opacity.l};
                transition: all 1s ease-in-out;
            `;
        }
    }}

    &:hover {
        z-index: ${({ theme: { zIndex } }) => zIndex.l};
        box-shadow: ${({ theme: { shadows } }) => shadows.shadowDropDown};
        transform: rotateZ(5deg);
    }
`;
