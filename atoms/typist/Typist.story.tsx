import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { number } from '@storybook/addon-knobs';
import { Typist } from './Typist';

const story = atomStories('Typist', module);

story.add('Looping', () => {
    return (
        <Typist
            charTimeout={number('charTimeout', 75)}
            resetTimeout={number('resetTimeout', 2000)}
            lines={['hello world', 'and again', 'a third', 'story time!']}
        />
    );
});
