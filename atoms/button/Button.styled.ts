import styled from 'styled-components';
import { text400 } from 'atoms/typography';

export const ButtonBase = styled.button`
  ${text400}
  appearance: none;
  display: block;
  padding: 12px 32px;
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

export const PrimaryButton = styled(ButtonBase)`
  background-color: var(--green400);
`;

export const SecondaryButton = styled(ButtonBase)``;

export const DiscordButton = styled(ButtonBase)`
  background-color: var(--discord400);
  border: 2px solid var(--discord200);
`;

export const MutedButton = styled(ButtonBase)`
  border: 2px solid rgba(0, 0, 0, 0.15);
  background: none;
  :hover {
    background-color: var(--taupe200);
  }
`;
