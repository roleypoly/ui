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
import { Popover } from 'atoms/popover';
import { UserPopover } from 'molecules/user-popover';

type Props = {
    user: RoleypolyUser.AsObject;
};

export const Authed = (props: Props) => {
    const [popoverState, setPopoverState] = React.useState(false);

    return (
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
                    <InteractionBase
                        onClick={() => setPopoverState(true)}
                        hide={!popoverState}
                    >
                        {props.user.discorduser && (
                            <UserAvatarGroup user={props.user.discorduser} />
                        )}
                    </InteractionBase>
                    <Popover
                        headContent={<></>}
                        canDefocus
                        position="top right"
                        active={popoverState}
                        onExit={() => setPopoverState(false)}
                    >
                        {props.user.discorduser && (
                            <UserPopover user={props.user.discorduser} />
                        )}
                    </Popover>
                </MastheadRight>
            </MastheadAlignment>
        </MastheadBase>
    );
};
