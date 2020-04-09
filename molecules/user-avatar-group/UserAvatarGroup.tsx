import * as React from 'react';
import { DiscordUser } from '@roleypoly/rpc/shared';
import { utils, Avatar } from 'atoms/avatar';
import { Group, Collapse, Discriminator } from './UserAvatarGroup.styled';

type Props = {
    user: DiscordUser.AsObject;
};

export const UserAvatarGroup = (props: Props) => (
    <Group>
        <Collapse>
            {props.user.username}
            <Discriminator>#{props.user.discriminator}</Discriminator>
            &nbsp;
        </Collapse>
        <Avatar size={34} src={props.user.avatar}>
            {utils.initialsFromName(props.user.username)}
        </Avatar>
    </Group>
);
