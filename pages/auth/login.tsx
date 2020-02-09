import * as React from 'react';
import { AuthLogin, AuthLoginProps } from 'templates/auth-login';
import { NextPageContext } from 'next';

const AuthLoginPage = (props: AuthLoginProps) => {
    return <AuthLogin {...props} />;
};

AuthLoginPage.getInitialProps = async (ctx: NextPageContext): Promise<AuthLoginProps> => {
    const serverID = ctx.query.serverID as string;

    return {
        guildSlug: serverID ? /* get stuff */ undefined : undefined,
        onSendSecretCode: (code: string) => {
            // do auth
        },
        botName: 'roleypoly#3266',
    };
};

export default AuthLoginPage;
