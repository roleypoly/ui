import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { TextInput, TextInputWithIcon } from './TextInput';
import { action } from '@storybook/addon-actions';
import { SmallTitle } from 'atoms/typography';
import { FiKey } from 'react-icons/fi';
import { text as textKnob } from '@storybook/addon-knobs';

const story = atomStories('Text Input', module);

story.add('Common', () =>
    React.createElement(() => {
        const [text, setText] = React.useState<string>();

        const placeholder = textKnob('Placeholder Text', 'Placeholder');

        const update = (event: React.ChangeEvent<HTMLInputElement>) => {
            setText(event.target.value);
            action('update')(event);
        };

        const props = {
            placeholder,
            value: text,
            onChange: update,
        };

        return (
            <div>
                <SmallTitle>TextInput</SmallTitle>
                <div>
                    <TextInput {...props} />
                </div>
                <div>
                    <TextInput {...props} disabled />
                </div>
                <SmallTitle>TextInputWithIcon</SmallTitle>
                <div>
                    <TextInputWithIcon icon={<FiKey />} {...props} />
                </div>
                <div>
                    <TextInputWithIcon icon={<FiKey />} {...props} disabled />
                </div>
                <div>
                    <TextInputWithIcon icon={<FiKey />} {...props} type="password" />
                </div>
            </div>
        );
    })
);
