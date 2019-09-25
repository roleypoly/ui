import * as React from 'react';
import { Preauth } from './Preauth';
import { organismStories } from 'organisms/organisms.story';
import { guild } from 'hack/fixtures/storyData';
import { action } from '@storybook/addon-actions';

const story = organismStories('Preauth', module);

story.add('Preauth, No Slug', () => {
  return <Preauth onSendSecretCode={action('secret code!')} />;
});

story.add('Preauth, With Slug', () => {
  return <Preauth guildSlug={guild} onSendSecretCode={action('secret code!')} />;
});
