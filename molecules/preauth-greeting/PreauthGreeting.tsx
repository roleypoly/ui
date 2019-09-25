import * as React from 'react';
import { Avatar, utils as avatarUtils } from 'atoms/avatar';
import { Guild } from '@roleypoly/rpc/discord';
import { AccentTitle } from 'atoms/typography';
import { Space } from 'atoms/space';

type GreetingProps = {
  guildSlug: Guild.AsObject;
};

export const PreauthGreeting = (props: GreetingProps) => (
  <>
    <Avatar size={64} src={props.guildSlug.icon}>
      {avatarUtils.initialsFromName(props.guildSlug.name)}
    </Avatar>
    <AccentTitle>
      Hi there. <b>{props.guildSlug.name}</b> uses Roleypoly to help assign you roles.
    </AccentTitle>
    <Space />
    <Space />
  </>
);
