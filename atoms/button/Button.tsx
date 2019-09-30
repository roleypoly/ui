import * as React from 'react';
import * as styled from './Button.styled';

export type ButtonProps = Partial<styled.ButtonComposerOptions> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  loading?: boolean;
};

export const Button = (props: ButtonProps) => {
  const modifiers: ButtonProps['modifiers'] = [];
  if (props.loading) {
    modifiers.push('withLoading');
  }

  if (props.icon) {
    modifiers.push('withIcon');
  }

  const BaseComponent = styled.composeButton({
    size: props.size || 'large',
    color: props.color || 'primary',
    modifiers,
  });

  return (
    <BaseComponent>
      {props.icon && <styled.IconContainer>{props.icon}</styled.IconContainer>}
      <div>{props.children}</div>
    </BaseComponent>
  );
};
