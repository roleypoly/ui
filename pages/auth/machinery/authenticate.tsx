import * as React from 'react';
import { NextPageContext, NextPage } from 'next';
import { withUser, useUser, USER_COOKIE_NAME } from 'systems/user';
import { useRouter } from 'next/router';
import { Auth } from 'systems/rpc';
import { Token } from '@roleypoly/rpc/auth/shared_pb';
import { setCookie } from 'nookies';
import { unstashSession, restoreSession } from 'systems/session';

type AuthProps = {
    token: string;
    state: string;
    successfullyAuthenticated: boolean;
};

const AuthenticationError = new Error('failed to authenticate session from client token');
const StateError = new Error('server sent back bad state token');

const doAuthenticate = async (token: string, state: string): Promise<string> => {
    const tokenRequest = new Token();
    tokenRequest.setToken(token);
    tokenRequest.setState(state);
    tokenRequest.setType(Token.Type.CLIENTTOKEN);

    try {
        const tokenResponse = await Auth.resolveSessionKey(tokenRequest);

        if (tokenResponse.getState() !== state) {
            throw StateError;
        }

        if (tokenResponse.getType() !== Token.Type.SESSIONKEY) {
            throw AuthenticationError;
        }

        const sessionKey = tokenResponse.getToken();

        return sessionKey;
    } catch (e) {
        if (e === StateError) {
            throw e;
        }

        throw AuthenticationError;
    }
};

const Authenticate: NextPage<AuthProps> = (props: AuthProps) => {
    const { token, successfullyAuthenticated } = props;
    const router = useRouter();
    const user = useUser();

    if (!token) {
        React.useEffect(() => {
            router
                .push({ pathname: '/internal/error/authFailure' })
                .catch(() => console.error('router push failed.'));
        });

        return null;
    }

    if (successfullyAuthenticated || user) {
        React.useEffect(() => {
            const resumedSession = unstashSession(undefined, '/');
            restoreSession(undefined, resumedSession);
        });
    }

    return null;
};

Authenticate.getInitialProps = async (ctx: NextPageContext): Promise<AuthProps> => {
    const { token, state } = ctx.query as { [x: string]: string };

    let successfullyAuthenticated = false;

    try {
        const sessionKey = await doAuthenticate(token, state);
        setCookie(ctx, USER_COOKIE_NAME, sessionKey, {
            maxAge: 60 * 60 * 5, // 5 hours
            path: '/',
        });
        successfullyAuthenticated = true;
    } catch (e) {
        console.error(e);
    }

    if (successfullyAuthenticated) {
        const resumedSession = unstashSession(ctx, '/');
        restoreSession(ctx, resumedSession);
    }

    return {
        token,
        state,
        successfullyAuthenticated,
    };
};

export default withUser(Authenticate);
