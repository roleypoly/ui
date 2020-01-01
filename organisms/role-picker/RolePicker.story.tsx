import * as React from 'react';
import { RolePicker, RolePickerProps } from './RolePicker';
import { organismStories } from 'organisms/organisms.story';
import { guildData, member, guildRoles } from 'hack/fixtures/storyData';
import { action } from '@storybook/addon-actions';

const story = organismStories('Role Picker', module);

const props: RolePickerProps = {
  server: guildData,
  member: member,
  roles: guildRoles,
  onSubmit: action('onSubmit'),
};

story.add('Role Picker', () => <RolePicker {...props} />);
