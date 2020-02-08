import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { Logomark, Logotype } from './Branding';
import styled from 'styled-components';

const story = atomStories('Branding', module);

const Wrapper = styled.div`
    background-color: black;
    padding: 2em;
`;

story.add('Logomark', () => (
    <Wrapper>
        <Logomark />
    </Wrapper>
));

story.add('Logotype', () => (
    <Wrapper>
        <Logotype />
    </Wrapper>
));
