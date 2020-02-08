import * as React from 'react';
import * as Masthead from 'organisms/masthead';
import { RoleypolyUser } from '@roleypoly/rpc/shared';
import { Footer } from 'molecules/footer';
import { Content } from './AppShell.styled';

type AppShellProps = {
    children: React.ReactNode;
    user: RoleypolyUser.AsObject | null;
    showFooter?: boolean;
};

export const AppShell = (props: AppShellProps) => (
    <>
        {props.user !== null ? <Masthead.Authed user={props.user} /> : <Masthead.Guest />}
        <Content>{props.children}</Content>
        {props.showFooter && <Footer />}
    </>
);
