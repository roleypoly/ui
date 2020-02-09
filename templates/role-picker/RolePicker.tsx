import * as React from 'react';
import { AppShell } from 'organisms/app-shell';
import { RolePicker, RolePickerProps } from 'organisms/role-picker';
import { RoleypolyUser } from '@roleypoly/rpc/shared';

export type RolePickerTemplateProps = RolePickerProps & {
    user: RoleypolyUser.AsObject;
};

export const RolePickerTemplate = (props: RolePickerTemplateProps) => {
    const { user, ...pickerProps } = props;
    return (
        <AppShell user={user}>
            <RolePicker {...pickerProps} />
        </AppShell>
    );
};
