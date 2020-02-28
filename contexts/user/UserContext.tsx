import { RoleypolyUser } from '@roleypoly/rpc/shared';
import { BrowserHeaders } from 'browser-headers';
import * as React from 'react';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { useAuthClient } from 'contexts/withAuthClient';

const SESSION_KEY_NAME = 'sessionKey';

export type UserState =
    | {
          user: RoleypolyUser.AsObject;
          sessionKey: string;
      }
    | {
          user: null;
          sessionKey: null;
      };

export type UserContextValue = UserState & {
    updateSessionKey: (newKey: string | null) => Promise<void>;
    rpcAuthorization: (override: string | null | undefined) => BrowserHeaders;
};

export const UserContext = React.createContext<UserContextValue>({
    user: null,
    sessionKey: null,
    updateSessionKey: async () => void 0,
    rpcAuthorization: () => new BrowserHeaders(),
});

export const useUser = () => React.useContext(UserContext);

export const UserContextProvider = (props: {
    children: React.ReactNode;
    initialState?: UserState;
}) => {
    const authClient = useAuthClient()();

    const [userState, setUserState] = React.useState<UserState>({
        user: null,
        sessionKey: null,
        ...props?.initialState,
    });

    const rpcAuthorization: UserContextValue['rpcAuthorization'] = (
        key: string | null | undefined = userState.sessionKey
    ) => new BrowserHeaders({ Authorization: key ? `Bearer ${key}` : `None` });

    const updateSessionKey: UserContextValue['updateSessionKey'] = async (
        newKey: string | null
    ) => {
        sessionStorage.setItem(SESSION_KEY_NAME, JSON.stringify(newKey));
        if (newKey === null || newKey === '') {
            setUserState({
                user: null,
                sessionKey: null,
            });

            return;
        }

        const session = (
            await authClient.getUserSession(new Empty(), rpcAuthorization(newKey))
        ).toObject();

        if (session.user === undefined) {
            return updateSessionKey(null);
        }

        setUserState({
            user: session.user,
            sessionKey: newKey,
        });
    };

    React.useEffect(() => {
        const storedSessionKey = sessionStorage.getItem(SESSION_KEY_NAME);
        if (!storedSessionKey) {
            return;
        }

        updateSessionKey(JSON.parse(storedSessionKey));
    }, []);

    return (
        <UserContext.Provider
            value={{
                ...userState,
                updateSessionKey,
                rpcAuthorization,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

UserContextProvider.displayName = 'UserContextProvider';
