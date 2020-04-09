import styled, { css } from 'styled-components';
import { onSmallScreen } from 'atoms/breakpoints';
import { palette } from 'atoms/colors';

export const Collapse = styled.div`
    ${onSmallScreen(css`
        display: none;
    `)}
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const Discriminator = styled.span`
    color: ${palette.taupe500};
    font-size: 75%;
    padding: 0 5px;
`;
