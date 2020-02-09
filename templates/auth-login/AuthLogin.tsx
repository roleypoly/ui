import * as React from 'react';
import { AppShell } from 'organisms/app-shell';
import { Preauth, PreauthProps } from 'organisms/preauth/Preauth';
import { Space } from 'atoms/space';

export type AuthLoginProps = PreauthProps;

export const AuthLogin = (props: AuthLoginProps) => (
    <AppShell showFooter user={null}>
        <Space />
        <Space />
        <Preauth {...props} />
    </AppShell>
);
