import * as React from 'react';
import { templateStories } from 'templates/templates.story';
import { Error } from './Errors';
import { text } from '@storybook/addon-knobs';
import { errorMessages } from './errorStrings';

const story = templateStories('Errors', module);
const messages = templateStories('Errors/Messages', module);

for (let message in errorMessages) {
    messages.add(`${message}`, () => <Error code={message} />);
}
