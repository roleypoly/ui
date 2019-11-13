import * as React from 'react';
import { Role } from '@roleypoly/rpc/discord';
import { LargeText, AmbientLarge } from 'atoms/typography';
import { numberToChroma } from 'atoms/colors';

export type CategoryProps = {
  title: string;
  roles: Role.AsObject[];
  selectedRoles: string[];
  onChange: (role: Role.AsObject) => (newState: boolean, oldState: boolean) => void;
  type: 'single' | 'multi';
} & (
  | {
      wikiMode: true;
      roleWikiData: { [roleId: string]: string };
    }
  | {
      wikiMode: false;
    }
);

export const PickerCategory = (props: CategoryProps) => (
  <div>
    <p>
      <LargeText>{props.title}</LargeText>
      {props.type === 'single' && <AmbientLarge>Pick one</AmbientLarge>}
    </p>
    <div>
      {props.roles.map((role, idx) => (
        <p
          key={idx}
          style={{
            color: numberToChroma(role.color).css(),
            fontWeight: props.selectedRoles.includes(role.id) ? 'bold' : 'normal',
          }}
        >
          {role.name}
        </p>
      ))}
    </div>
  </div>
);
