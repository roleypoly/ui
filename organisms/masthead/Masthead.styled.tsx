import styled from 'styled-components';
import { palette } from 'atoms/colors';
import { onSmallScreen } from 'atoms/breakpoints';
import { transitions } from 'atoms/timings';

export const MastheadBase = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: ${palette.taupe100};
    display: flex;
    align-items: center;
    padding: 0 3px;
`;

const sideBase = styled.div`
    flex: 1;
    display: flex;
`;

export const MastheadLeft = styled(sideBase)``;

export const MastheadRight = styled(sideBase)`
    justify-content: flex-end;
`;

export const MastheadCollapse = styled.div`
    ${onSmallScreen(`
    display: none;
  `)}
`;

export const MastheadInner = styled.div`
    /* height: 30px; */
    display: flex;
    align-items: center;
`;

export const InteractionBase = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 5px;
    transition: background-color ${transitions.actionable}s ease-in-out;

    :hover {
        background-color: rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }
`;
