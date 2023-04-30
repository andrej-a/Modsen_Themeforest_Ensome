import styled from 'styled-components';

import { size } from '@/types/constants';

const { tablet } = size;
export const AccordionContainer = styled.div`
    width: ${({ theme: { width } }) => width.xxl}%;
    max-width: ${({ theme: { width } }) => width.x4l}px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme: { gap } }) => gap.sxx}px;
    margin: ${({ theme: { margin } }) => margin.xxl};
    padding: ${({ theme: { padding } }) => padding.s3s};

    @media (max-width: ${tablet}px) {
        margin: ${({ theme: { margin } }) => margin.l1l};
    }
`;
