import * as React from 'react';
import { templateStories } from 'templates/templates.story';
import { RolePicker, RolePickerProps } from './RolePicker';

const story = templateStories('Role Picker', module);

const props: RolePickerProps = {};

story.add('Role Picker', () => <RolePicker {...props} />);
