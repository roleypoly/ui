import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { FaderOpacity, FaderSlide } from './Fader';
import { boolean } from '@storybook/addon-knobs';
import { Button } from 'atoms/button';
import { action } from '@storybook/addon-actions';

const story = atomStories('Faders', module);

story.add('FaderOpacity', () => {
  return (
    <FaderOpacity isVisible={boolean('is visible?', true)}>
      <Button onClick={action('onClick')}>Click me!</Button>
    </FaderOpacity>
  );
});

story.add('FaderSlide', () => {
  return (
    <FaderSlide isVisible={boolean('is visible?', true)}>
      <Button onClick={action('onClick')}>Click me!</Button>
    </FaderSlide>
  );
});
