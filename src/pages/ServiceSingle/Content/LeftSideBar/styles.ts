import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;

export const LeftSidebar = styled.div`
    width: ${({ theme: { width } }) => width.xxl}vw;
    max-width: ${({ theme: { width } }) => width.x3l}px;
    height: auto;

    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.sl}px;
    }
`;
export const TextWithImage = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sl}px;
`;

export const ImageContainer = styled.div``;

export const ContentText = styled.div`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.grey};

    span {
        font-family: ${({ theme: { fontFamily } }) => fontFamily.manrope};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.xxxl};
        font-size: ${({ theme: { fontSize } }) => fontSize.xll}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.x2l}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.black};

        @media (max-width: ${tablet}px) {
            font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
            line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
        }
    }

    @media (max-width: ${tablet}px) {
        font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    }
`;

export const SolutionCheckListContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;

    display: flex;
    gap: ${({ theme: { gap } }) => gap.xxxl}px;

    @media (max-width: ${tablet}px) {
        gap: ${({ theme: { gap } }) => gap.sl}px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const CheckList = styled.div`
    ul {
        list-style-image: url('../logo/checkImage.png');
    }
    li {
        margin-bottom: ${({ theme: { margin } }) => margin.xs}px;

        font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
        font-style: normal;
        font-weight: ${({ theme: { fontWeight } }) => fontWeight.s};
        font-size: ${({ theme: { fontSize } }) => fontSize.xl}px;
        line-height: ${({ theme: { lineHeight } }) => lineHeight.xl}px;
        letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
        color: ${({ theme: { colors } }) => colors.black};
    }
`;
