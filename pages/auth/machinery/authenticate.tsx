import * as React from 'react';
import { NextPageContext } from 'next';
import { useAuthClient } from 'contexts/withAuthClient';
import { useUser } from 'contexts/user';
import { Token } from '@roleypoly/rpc/auth';

type AuthProps = {
    token: string;
    state: string;
};

const Authenticate = (props: AuthProps) => {
    const { token, state } = props;
    const authClient = useAuthClient()();
    const user = useUser();

    React.useEffect(() => {
        (async () => {
            if (user.sessionKey !== null) {
                location.replace('/');
            }

            const clientToken = new Token();
            clientToken.setToken(token);
            clientToken.setType(Token.Type.CLIENTTOKEN);

            const sessionKey = (
                await authClient.resolveSessionKey(clientToken)
            ).toObject();

            user.updateSessionKey(sessionKey.token);
        })();
    }, [token, state]);

    return null;
};

Authenticate.getDefaultProps = (ctx: NextPageContext): AuthProps => {
    return {
        token: ctx.query.token as string,
        state: ctx.query.state as string,
    };
};

export default Authenticate;
