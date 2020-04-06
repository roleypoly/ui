import * as React from 'react';
import { getDisplayName, NextPageContext } from 'next/dist/next-server/lib/utils';
import { RoleypolyUser } from '@roleypoly/rpc/shared';
import { parseCookies } from 'nookies';
import { setSessionKey, Auth, withBearer } from 'systems/rpc';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

export const USER_COOKIE_NAME = 'rpSessionKey';

export type WithUser = {
    user: RoleypolyUser.AsObject | null;
};

const UserContext = React.createContext<WithUser>({ user: null });
export const useUser = () => React.useContext(UserContext);

export const withUser = <T,>(
    WrappedComponent: NextPage<T>,
    redirectIfUnauthorized?: string
) => {
    type WrappedComponentProps = Partial<T> | WithUser;

    const ComponentWithUser = (props: T & WithUser) => {
        const { user, ...componentProps } = props;

        if (!user && redirectIfUnauthorized) {
            React.useEffect(() => {
                const router = useRouter();
                router
                    .push(redirectIfUnauthorized)
                    .catch(() => console.error('rounter push failed'));
            });

            return (
                <>
                    <Head>
                        <meta httpEquiv="Location" content="/" />
                    </Head>
                    <p>
                        Unrecoverable client-side authentication failure...
                        <br />
                        <a href={redirectIfUnauthorized}>Return to home.</a>
                    </p>
                </>
            );
        }

        return (
            <UserContext.Provider value={{ user: props.user }}>
                <WrappedComponent {...(componentProps as any)} />;
            </UserContext.Provider>
        );
    };

    ComponentWithUser.displayName = `withUser(${getDisplayName(WrappedComponent)})`;

    ComponentWithUser.getInitialProps = async (
        ctx: NextPageContext
    ): Promise<WrappedComponentProps> => {
        const { [USER_COOKIE_NAME]: sessionKey } = parseCookies(ctx);
        setSessionKey(sessionKey || null);

        let user: WithUser['user'] = null;
        if (sessionKey) {
            try {
                const session = await Auth.getUserSession(new Empty(), withBearer());
                user = session.getUser()?.toObject() ?? null;
            } catch (e) {
                console.warn('Failed to get session...');
            }
        }

        if (redirectIfUnauthorized && !user) {
            ctx.res?.writeHead(302, { Location: redirectIfUnauthorized });
            ctx.res?.end();
            return {};
        }

        const componentProps: Partial<T> =
            (await WrappedComponent.getInitialProps?.(ctx)) ?? {};

        return { ...componentProps, user };
    };

    return ComponentWithUser;
};
