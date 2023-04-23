import styled from 'styled-components';

export const FormContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.l1x}px;
    height: ${({ theme: { height } }) => height.xxl}%;
    padding: ${({ theme: { padding } }) => padding.x4ll};
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    background: ${({ theme: { colors } }) => colors.white};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius.l}px;
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
`;
