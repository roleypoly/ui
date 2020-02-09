import { RoleypolyUser } from '@roleypoly/rpc/shared';
import { Avatar } from 'atoms/avatar';
import { Logomark } from 'atoms/branding';
import Link from 'next/link';
import * as React from 'react';
import * as styled from './Masthead.styled';

type Props = {
    user: RoleypolyUser.AsObject;
};

export const Authed = (props: Props) => (
    <styled.MastheadBase>
        <styled.MastheadAlignment>
            <styled.MastheadLeft>
                <Link href="/dashboard">
                    <Logomark height={40} />
                </Link>
            </styled.MastheadLeft>
            <styled.MastheadRight>
                <styled.InteractionBase>
                    <styled.MastheadInner>
                        <styled.MastheadCollapse>
                            {props.user.discorduser?.username}#
                            {props.user.discorduser?.discriminator}
                            &nbsp;&nbsp;
                        </styled.MastheadCollapse>
                        <Avatar size={34} src={props.user.discorduser?.avatar}>
                            {props.user.discorduser?.username[0].toUpperCase()}
                        </Avatar>
                    </styled.MastheadInner>
                </styled.InteractionBase>
            </styled.MastheadRight>
        </styled.MastheadAlignment>
    </styled.MastheadBase>
);
