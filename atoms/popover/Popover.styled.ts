import { onSmallScreen, onTablet, onDesktop } from 'atoms/breakpoints';
import { palette } from 'atoms/colors';
import styled, { css } from 'styled-components';
import { transitions } from 'atoms/timings';

type PopoverStyledProps = {
    active: boolean;
};

export const PopoverBase = styled.div<PopoverStyledProps>`
    box-sizing: border-box;
    position: absolute;
    background-color: ${palette.taupe100};
    padding: 5px;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    z-index: 10;
    transition: opacity ${transitions.out2in}s ease-in,
        transform ${transitions.out2in}s ease-in;
    min-width: 320px;
    max-width: 100vw;
    ${props =>
        !props.active &&
        css`
            transform: translateY(-2vh);
            opacity: 0;
            pointer-events: none;
        `}
    ${onSmallScreen(css`
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    `)};
`;

export const DefocusHandler = styled.div<PopoverStyledProps>`
    background-color: rgba(0, 0, 0, 0.01);
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${props =>
        !props.active &&
        css`
            display: none;
            pointer-events: none;
        `}
`;

export const PopoverHead = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`;

export const PopoverHeadCloser = styled.div`
    flex: 0;
    font-size: 2em;
    cursor: pointer;
    margin-right: 10px;
    ${onTablet(
        css`
            display: none;
        `
    )}
`;

export const PopoverContent = styled.div`
    padding: 5px;
`;
