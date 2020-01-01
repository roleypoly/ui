jest
  .unmock('atoms/role')
  .unmock('atoms/button')
  .unmock('organisms/picker-category')
  .unmock('organisms/role-picker');

import { Button } from 'atoms/button';
import { shallow } from 'enzyme';
import {
  guildData,
  guildRoles,
  member,
  mockCategorySingle,
} from 'hack/fixtures/storyData';
import { PickerCategory } from 'organisms/picker-category';
import * as React from 'react';
import { RolePicker, RolePickerProps } from './RolePicker';
import { Role } from 'atoms/role';

it('unselects the rest of a category in single mode', () => {
  const props: RolePickerProps = {
    server: { ...guildData, categoriesList: [mockCategorySingle] },
    member: { ...member, rolesList: [] },
    roles: guildRoles,
    onSubmit: jest.fn(),
  };

  const view = shallow(<RolePicker {...props} />);

  const roles = view
    .find(PickerCategory)
    .dive()
    .find(Role);

  roles
    .first()
    .props()
    .onClick?.(true);

  view.find(Button).simulate('click');
  expect(props.onSubmit).toBeCalledWith([mockCategorySingle.rolesList[0]]);

  roles
    .last()
    .props()
    .onClick?.(true);

  view.find(Button).simulate('click');
  expect(props.onSubmit).toBeCalledWith([mockCategorySingle.rolesList[1]]);
});
