import styled from 'styled-components';

export const PaymentModalWindowContainer = styled.div`
    width: auto;
    height: auto;
    padding: ${({ theme: { padding } }) => padding.x6l}px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${({ theme: { colors } }) => colors.white};
`;

export const PaymentModalWindowContent = styled.div`
    width: auto;
    height: auto;
`;

export const PaymentModalWindowHeader = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    padding: ${({ theme: { padding } }) => padding.l}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PaymentModalWindowButtons = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    height: auto;
    padding: ${({ theme: { padding } }) => padding.x5l}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
