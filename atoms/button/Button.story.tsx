import * as React from 'react';
import { atomStories } from 'atoms/atoms.story';
import { Button, ButtonProps } from './Button';
import { text as textKnob } from '@storybook/addon-knobs';
import { FaDiscord } from 'react-icons/fa';
import { styled } from '@storybook/theming';

const story = atomStories('Button', module);

const colorModes: ButtonProps['colorMode'][] = [
  'primary',
  'secondary',
  'discord',
  'muted',
];

const Margin = styled.div`
  margin-top: 5px;
`;

const storyTemplate = (props: Omit<ButtonProps, 'children'>) => () => {
  const text = textKnob('Button content', 'Example Button');

  return (
    <div>
      {colorModes.map(mode => (
        <Margin>
          <Button {...props} colorMode={mode}>
            {text}
          </Button>
        </Margin>
      ))}
    </div>
  );
};

story.add(
  'Large',
  storyTemplate({
    size: 'large',
  })
);

story.add(
  'Large w/ Icon',
  storyTemplate({
    size: 'large',
    icon: <FaDiscord />,
  })
);

story.add(
  'Large w/ Loading',
  storyTemplate({
    size: 'large',
    icon: <FaDiscord />,
    loading: true,
  })
);

story.add(
  'Small',
  storyTemplate({
    size: 'small',
  })
);
