import { onSmallScreen } from 'atoms/breakpoints';
import { palette } from 'atoms/colors';
import { transitions } from 'atoms/timings';
import styled, { css } from 'styled-components';

export const MastheadBase = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    background-color: ${palette.taupe100};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3px;
    z-index: 100;
`;

export const MastheadAlignment = styled.div`
    max-width: 98vw;
    width: 1024px;
    display: flex;
    align-items: center;
`;

const sideBase = styled.div`
    flex: 1;
    display: flex;
`;

export const MastheadLeft = styled(sideBase)``;

export const MastheadRight = styled(sideBase)`
    flex: 0;
    justify-content: flex-end;
`;

export const MastheadCollapse = styled.div`
    ${onSmallScreen(css`
        display: none;
    `)}
`;

export const MastheadInner = styled.div`
    /* height: 30px; */
    display: flex;
    align-items: center;
`;

export const InteractionBase = styled.div<{ hide: boolean }>`
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0 5px;
    transition: * ${transitions.actionable}s ease-in-out;
    opacity: ${(props) => (props.hide ? 1 : 0)};

    :hover {
        background-color: rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }
`;

export const MastheadA = styled.a`
    display: flex;
    align-items: center;
    color: unset;
    text-decoration: unset;
`;
