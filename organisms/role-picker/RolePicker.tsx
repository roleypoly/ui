import { Member } from '@roleypoly/rpc/discord';
import { Category, GuildData } from '@roleypoly/rpc/platform';
import { GuildRoles, Role } from '@roleypoly/rpc/shared';
import { PickerCategory } from 'organisms/picker-category';
import * as React from 'react';
import { Container } from './RolePicker.styled';
import { FaderSlide } from 'atoms/fader';
import { Button } from 'atoms/button';

export type RolePickerProps = {
  server: GuildData.AsObject;
  member: Member.AsObject;
  roles: GuildRoles.AsObject;
  onSubmit: (selectedRoles: string[]) => void;
};

const arrayMatches = (a: any[], b: any[]) => {
  return (
    a === b ||
    (a.length === b.length && a.every(x => b.includes(x)) && b.every(x => a.includes(x)))
  );
};

export const RolePicker = (props: RolePickerProps) => {
  const [selectedRoles, updateSelectedRoles] = React.useState<string[]>(
    props.member.rolesList
  );

  const handleChange = (category: Category.AsObject) => (role: Role.AsObject) => (
    newState: boolean
  ) => {
    if (category.type === Category.CategoryType.SINGLE) {
      updateSelectedRoles(
        newState === true
          ? [...selectedRoles.filter(x => !category.rolesList.includes(x)), role.id]
          : selectedRoles.filter(x => x !== role.id)
      );
    } else {
      updateSelectedRoles(
        newState === true
          ? [...selectedRoles, role.id]
          : selectedRoles.filter(x => x !== role.id)
      );
    }
  };

  return (
    <Container>
      <div>Server Message: {props.server.message}</div>
      <div>
        {props.server.categoriesList.map((category, idx) => (
          <PickerCategory
            key={idx}
            category={category}
            title={category.name}
            selectedRoles={selectedRoles.filter(roleId =>
              category.rolesList.includes(roleId)
            )}
            roles={
              category.rolesList
                .map(role => props.roles.rolesList.find(r => r.id === role))
                .filter(r => r !== undefined) as Role.AsObject[]
            }
            onChange={handleChange(category)}
            wikiMode={false}
            type={category.type === Category.CategoryType.SINGLE ? 'single' : 'multi'}
          />
        ))}
      </div>
      <FaderSlide isVisible={!arrayMatches(selectedRoles, props.member.rolesList)}>
        <Button onClick={() => props.onSubmit(selectedRoles)}>Submit</Button>
      </FaderSlide>
    </Container>
  );
};
