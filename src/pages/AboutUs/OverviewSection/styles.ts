import styled from 'styled-components';

export const ContentContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    margin-top: ${({ theme: { margin } }) => margin.ml}px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const DescriptionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${({ theme: { gap } }) => gap.sl}px;

    font-style: normal;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
`;

export const Title = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxxl}px;
    color: ${({ theme: { colors } }) => colors.black};
`;

export const Description = styled.div`
    max-width: ${({ theme: { width } }) => width.l1x}px;

    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xxl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xxl}px;
    color: ${({ theme: { colors } }) => colors.grey};
`;

export const CustomersContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
`;
