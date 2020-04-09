import { RoleypolyUser } from '@roleypoly/rpc/shared';
import { Logomark } from 'atoms/branding';
import { UserAvatarGroup } from 'molecules/user-avatar-group';
import Link from 'next/link';
import * as React from 'react';
import {
    InteractionBase,
    MastheadA,
    MastheadAlignment,
    MastheadBase,
    MastheadLeft,
    MastheadRight,
} from './Masthead.styled';

type Props = {
    user: RoleypolyUser.AsObject;
};

export const Authed = (props: Props) => (
    <MastheadBase>
        <MastheadAlignment>
            <MastheadLeft>
                <Link href="/dashboard" passHref>
                    <MastheadA>
                        <Logomark height={40} />
                    </MastheadA>
                </Link>
            </MastheadLeft>
            <MastheadRight>
                <InteractionBase>
                    {props.user.discorduser && (
                        <UserAvatarGroup user={props.user.discorduser} />
                    )}
                </InteractionBase>
            </MastheadRight>
        </MastheadAlignment>
    </MastheadBase>
);
