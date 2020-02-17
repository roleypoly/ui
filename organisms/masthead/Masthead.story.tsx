import { rpUser } from 'hack/fixtures/storyData';
import { organismStories } from 'organisms/organisms.story';
import * as React from 'react';
import { Authed } from './Authed';
import { Guest } from './Guest';

const rootStory = organismStories('Masthead', module);
const userStory = organismStories('Masthead/User', module);

userStory.add('Has Guilds', () => <Authed user={rpUser} />);
userStory.add('No Guilds (New User)', () => <Authed user={rpUser} />);

rootStory.add('Guest', () => <Guest />);
