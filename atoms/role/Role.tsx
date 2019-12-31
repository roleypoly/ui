import * as React from 'react';
import { Role as RPCRole } from '@roleypoly/rpc/shared';
import * as styled from './Role.styled';
import { FaCheck } from 'react-icons/fa';
import { numberToChroma } from 'atoms/colors';
import chroma from 'chroma-js';

type Props = {
  role: RPCRole.AsObject;
  selected: boolean;
  onClick?: (newState: boolean) => void;
};

export const Role = (props: Props) => {
  const colorVars = {
    '--role-color': 'white',
    '--role-contrast': 'hsl(0,0,0%)',
    '--role-accent': 'hsl(0,0,70%)',
  };

  if (props.role.color !== 0) {
    const baseColor = numberToChroma(props.role.color);
    const contrastColorUp = baseColor.brighten(5);
    const contrastColorDown = baseColor.darken(5);
    const ratio = chroma.contrast(contrastColorDown, baseColor);
    const contrastColor = ratio > 2 ? contrastColorDown : contrastColorUp;
    const accentColor = ratio > 2 ? baseColor.darken(2) : baseColor.brighten(2);
    colorVars['--role-color'] = baseColor.css();
    colorVars['--role-accent'] = accentColor.css();
    colorVars['--role-contrast'] = contrastColor.css();
  }

  const styledProps: styled.StyledProps = {
    selected: props.selected,
    defaultColor: props.role.color === 0,
  };

  return (
    <styled.Outer
      {...styledProps}
      style={colorVars as any}
      onClick={() => props.onClick?.(!props.selected)}
    >
      <styled.Circle {...styledProps}>
        <FaCheck />
      </styled.Circle>
      <styled.Text>{props.role.name}</styled.Text>
    </styled.Outer>
  );
};
