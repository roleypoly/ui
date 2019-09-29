import * as React from 'react';
import * as styled from './Button.styled';

export type ButtonProps = {
  children: React.ReactNode;
  size?: 'large' | 'small';
  icon?: React.ReactNode;
  colorMode?: 'primary' | 'secondary' | 'discord' | 'muted';
  loading?: boolean;
};

const getBaseFromMode = (mode: ButtonProps['colorMode']) => {
  switch (mode) {
    default:
    case 'primary':
      return styled.PrimaryButton;
    case 'muted':
      return styled.MutedButton;
    case 'secondary':
      return styled.SecondaryButton;
    case 'discord':
      return styled.DiscordButton;
  }
};

export const Button = (props: ButtonProps) => {
  const BaseComponent = getBaseFromMode(props.colorMode);

  return <BaseComponent>{props.children}</BaseComponent>;
};
