import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { HalfsiesContainer, HalfsiesItem } from './Halfsies';

const story = atomStories('Halfsies', module);

story.add('Halfsies Container', () => (
    <HalfsiesContainer>
        <HalfsiesItem>Lefty doo</HalfsiesItem>
        <HalfsiesItem>Righty doo</HalfsiesItem>
    </HalfsiesContainer>
));
