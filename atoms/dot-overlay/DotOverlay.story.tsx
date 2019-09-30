import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { DotOverlay } from './DotOverlay';

const story = atomStories('Dot Overlay', module);

story.add('Dark', () => <DotOverlay />);
story.add('Light', () => <DotOverlay light />);
