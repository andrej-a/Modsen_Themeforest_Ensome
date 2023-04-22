import styled from 'styled-components';

export const ContactsContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: ${({ theme: { padding } }) => padding.mxx};
    border-bottom: ${({ theme: { border } }) => border.xs};
`;

export const ContactsDataContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    gap: ${({ theme: { gap } }) => gap.sx}px;
`;

export const ContactsData = styled.div`
    max-width: ${({ theme: { width } }) => width.xxlx}px;
    display: flex;
    justify-content: space-between;
    gap: ${({ theme: { gap } }) => gap.l}px;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme: { gap } }) => gap.s}px;
`;

export const DataItem = styled.div`
    display: flex;
    gap: 10px;
`;

export const DataLink = styled.a<{ isPrimary: boolean }>`
    font-family: ${({ theme: { fontFamily } }) => fontFamily.openSans};
    font-style: normal;
    font-weight: ${({ isPrimary, theme: { fontWeight } }) =>
        isPrimary ? fontWeight.xl : fontWeight.s};
    font-size: ${({ theme: { fontSize } }) => fontSize.l}px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.l}px;
    letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing.x}em;
    color: ${({ theme: { colors } }) => colors.black};
    text-decoration: none;
    cursor: pointer;
`;

export const Social = styled.div`
    display: flex;
    gap: ${({ theme: { gap } }) => gap.sx}px;

    path {
        cursor: pointer;
        fill: ${({ theme: { colors } }) => colors.primary};
        &:hover {
            fill: ${({ theme: { colors } }) => colors.secondary};
        }
    }
`;

export const SocialLink = styled.a``;
