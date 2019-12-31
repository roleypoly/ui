import styled from 'styled-components';
import { transitions } from 'atoms/timings';
import { palette } from 'atoms/colors';

export type StyledProps = { selected: boolean; defaultColor: boolean };

export const Outer = styled.div<StyledProps>`
  border-radius: 24px;
  background-color: ${props =>
    props.selected && !props.defaultColor ? 'var(--role-color)' : palette.taupe100};
  color: ${props => (props.selected ? 'var(--role-contrast)' : palette.grey600)};
  transition: color ${transitions.in2in}s ease-in-out,
    background-color ${transitions.in2in}s ease-in-out,
    transform ${transitions.actionable}s ease-in-out,
    box-shadow ${transitions.actionable}s ease-in-out;
  display: flex;
  padding: 4px;
  user-select: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 0 0 transparent;
  }
`;

export const Circle = styled.div<StyledProps>`
  width: 23px;
  height: 23px;
  border-radius: 24px;
  background-color: ${props =>
    props.defaultColor && !props.selected ? 'transparent' : 'var(--role-color)'};
  border: 1px solid
    ${props => {
      if (props.defaultColor) {
        return 'var(--role-color)';
      }

      if (props.selected) {
        return 'var(--role-accent)';
      }

      return 'transparent';
    }};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border ${transitions.in2in}s ease-in-out,
    background-color ${transitions.in2in}s ease-in-out;

  svg {
    width: 10px;
    height: 10px;
    fill-opacity: ${props => (props.selected ? 1 : 0)};
    transition: fill-opacity ${transitions.in2in}s ease-in-out;
    fill: var(--role-contrast);
  }
`;

export const Text = styled.div`
  margin: 0 4px;
`;
