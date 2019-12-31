import * as React from 'react';
import { Role as RPCRole } from '@roleypoly/rpc/shared';
import { LargeText, AmbientLarge } from 'atoms/typography';
import { Role } from 'atoms/role';
import styled from 'styled-components';

export type CategoryProps = {
  title: string;
  roles: RPCRole.AsObject[];
  selectedRoles: string[];
  onChange: (role: RPCRole.AsObject) => (newState: boolean) => void;
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

const Category = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  overflow: hidden;
  padding: 5px;
`;

export const PickerCategory = (props: CategoryProps) => (
  <div>
    <p>
      <LargeText>{props.title}</LargeText>
      {props.type === 'single' && <AmbientLarge>Pick one</AmbientLarge>}
    </p>
    <Category>
      {props.roles.map((role, idx) => (
        <Container key={idx}>
          <Role
            role={role}
            selected={props.selectedRoles.includes(role.id)}
            onClick={props.onChange(role)}
          />
        </Container>
      ))}
    </Category>
  </div>
);
