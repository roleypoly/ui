import * as React from 'react';
import * as Masthead from 'organisms/masthead';
import { RoleypolyUser } from '@roleypoly/rpc/shared';
import { Footer } from 'molecules/footer';
import { Content, GlobalStyles } from './AppShell.styled';
import { GlobalStyleColors } from 'atoms/colors';

type AppShellProps = {
    children: React.ReactNode;
    user: RoleypolyUser.AsObject | null;
    showFooter?: boolean;
    small?: boolean;
};

export const AppShell = (props: AppShellProps) => (
    <>
        <GlobalStyles />
        <GlobalStyleColors />
        {props.user !== null ? <Masthead.Authed user={props.user} /> : <Masthead.Guest />}
        <Content small={props.small}>{props.children}</Content>
        {props.showFooter && <Footer />}
    </>
);
