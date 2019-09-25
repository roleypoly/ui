import { Guild } from '@roleypoly/rpc/discord';
import { Space } from 'atoms/space';
import { TextInputWithIcon } from 'atoms/text-input';
import { PreauthGreeting } from 'molecules/preauth-greeting';
import * as React from 'react';
import { FiKey } from 'react-icons/fi';
import styled from 'styled-components';

type PreauthProps = {
  guildSlug?: Guild.AsObject;
  onSendSecretCode: (code: string) => void;
};

const Centered = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Preauth = (props: PreauthProps) => {
  const [secretCode, setSecretCode] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecretCode(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      props.onSendSecretCode(secretCode);
    }
  };

  return (
    <Centered>
      {props.guildSlug && <PreauthGreeting guildSlug={props.guildSlug} />}
      <button>discord login</button>
      <Space />
      <TextInputWithIcon
        icon={<FiKey />}
        value={secretCode}
        placeholder="Super secret code..."
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
    </Centered>
  );
};
