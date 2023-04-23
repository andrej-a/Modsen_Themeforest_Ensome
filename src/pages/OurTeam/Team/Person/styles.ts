import styled, { css } from 'styled-components';

export const Person = styled.div<{ pos: boolean; isShow: boolean }>`
    position: relative;

    opacity: 0;
    cursor: pointer;

    ${({ pos, isShow }) => {
        if (pos) {
            return css`
                top: ${({ theme: { top } }) => top.xss}px;
                opacity: ${({ isShow }) => (isShow ? 1 : 0)};
                transition: all 1s ease-in-out;
            `;
        }

        if (isShow) {
            return css`
                opacity: 1;
                transition: all 1s ease-in-out;
            `;
        }
    }}

    &:hover {
        z-index: ${({ theme: { zIndex } }) => zIndex.l};
        box-shadow: ${({ theme: { shadows } }) => shadows.shadowDropDown};
        transform: rotateZ(30deg);
    }
`;

export const PersonInformation = styled.div`
    position: absolute;
    bottom: ${({ theme: { bottom } }) => bottom.none};

    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    margin: ${({ theme: { margin } }) => margin.s}px;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};
`;

export const Name = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
`;

export const Position = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
`;
