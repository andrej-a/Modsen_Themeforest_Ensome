import styled from 'styled-components';

export const SubscribeContainer = styled.div<{ type: string }>`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ type, theme: { colors } }) =>
        type === 'light' ? colors.primary : colors.secondary};
`;

export const SubscribeContent = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    margin: ${({ theme: { margin } }) => margin.lxxx}px;
    display: flex;
    gap: ${({ theme: { gap } }) => gap.x3l}px;
`;

export const SubscribeDescription = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x3l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.ssl}px;
`;

export const Title = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: flex-start;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    height: auto;
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxll}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxll}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};
`;

export const Description = styled.p`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.white};
`;

export const FormContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
