import { rpUser, guildData, member, guild, guildRoles } from 'hack/fixtures/storyData';
import { NextPageContext, NextPage } from 'next';
import * as React from 'react';
import { RolePickerTemplate, RolePickerTemplateProps } from 'templates/role-picker';
import { withUser, useUser } from 'systems/user';

const ServerIndex: NextPage<RolePickerTemplateProps> = (
    props: RolePickerTemplateProps
) => {
    const user = useUser();

    return <RolePickerTemplate {...props} user={user} />;
};

const props: RolePickerTemplateProps = {
    guildData: {
        ...guildData,
        message:
            'Hey, this is kind of a demo setup so features/use cases can be shown off.\n\nThanks for using Roleypoly <3',
    },
    member: member,
    guild: guild,
    roles: guildRoles,
    editable: false,
    user: rpUser,
    onSubmit: () => {
        console.log('nothing');
    },
};

ServerIndex.getInitialProps = async (
    ctx: NextPageContext
): Promise<RolePickerTemplateProps> => {
    return {
        ...props,
    };
};

export default withUser(ServerIndex, true);
