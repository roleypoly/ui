import * as React from 'react';
import { moleculeStories } from 'molecules/molecules.story';
import { UserDropdown } from './UserDropdown';
import { rpUser } from 'hack/fixtures/storyData';

const story = moleculeStories('User Dropdown', module);

story.add('User Dropdown', () => <UserDropdown user={rpUser} />);
