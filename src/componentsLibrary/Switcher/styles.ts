import styled, { css } from 'styled-components';

export const SwitcherContainer = styled.div`
    position: relative;
    width: ${({ theme: { width } }) => width.xxl}%;
    min-width: ${({ theme: { width } }) => width.x2l}px;
    max-width: ${({ theme: { width } }) => width.x2l}px;
    display: flex;

    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
    background: ${({ theme: { colors } }) => colors.white};
    cursor: pointer;
`;

export const Position = styled.div`
    width: ${({ theme: { width } }) => width.xll}%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme: { padding } }) => padding.sxx};

    &:hover {
        color: ${({ theme: { colors } }) => colors.primary};
    }
`;
export const Text = styled.p`
    position: relative;
    z-index: ${({ theme: { zIndex } }) => zIndex.l};

    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxl};
`;

export const SwitchElement = styled.div<{ currentLang: string }>`
    position: absolute;
    z-index: ${({ theme: { zIndex } }) => zIndex.s};
    top: ${({ theme: { top } }) => top.xs};
    left: ${({ theme: { left } }) => left.x}px;
    width: ${({ theme: { width } }) => width.xll}%;
    height: ${({ theme: { height } }) => height.xxl}%;

    background: ${({ theme: { colors } }) => colors.primary};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;

    ${({ currentLang }) => {
        if (currentLang === 'ru') {
            return css`
                transform: translateX(
                    ${({ theme: { translate } }) => translate.l}%
                );
            `;
        }
        return css`
            transform: translateX(
                ${({ theme: { translate } }) => translate.none}
            );
        `;
    }}
`;
