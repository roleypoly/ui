import styled, { css } from 'styled-components';
import { text400, text300 } from 'atoms/typography';

export const IconContainer = styled.div`
  margin-right: 0.6em;
`;

const base = styled.button`
  appearance: none;
  display: block;
  background-color: var(--taupe300);
  color: var(--grey900);
  border-radius: 3px;
  border: 2px solid rgba(0, 0, 0, 0.55);
  transition: all 0.15s ease-in-out;
  outline: 0;
  position: relative;
  user-select: none;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  :hover {
    transform: translateY(-1px);
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  :active {
    transform: translateY(1px);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    ::after {
      opacity: 0.1;
    }
  }
`;

const colors = {
  primary: css`
    background-color: var(--green400);
  `,
  secondary: css``,
  discord: css`
    background-color: var(--discord400);
    border: 2px solid var(--discord200);
  `,
  muted: css`
    border: 2px solid rgba(0, 0, 0, 0.15);
    background: none;
    :hover {
      background-color: var(--taupe200);
    }
  `,
};

const sizes = {
  small: css`
    ${text300}
    padding: 4px 8px;
  `,
  large: css`
    ${text400}
    padding: 12px 32px;
  `,
};

const modifiers = {
  withIcon: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  withLoading: css`
    pointer-events: none;
  `,
};

export type ButtonComposerOptions = {
  size: keyof typeof sizes;
  color: keyof typeof colors;
  modifiers?: Array<keyof typeof modifiers>;
};

export const composeButton = (opts: ButtonComposerOptions) => {
  return styled(base)`
    ${sizes[opts.size]}
    ${colors[opts.color]}
    ${opts.modifiers && opts.modifiers.map(mod => modifiers[mod]).join('\n')}
  `;
};
