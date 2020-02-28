jest.unmock('./UserContext');
jest.unmock('@roleypoly/rpc/auth/client');
jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        platformUrl: 'http://example.com',
    },
}));
jest.useFakeTimers();

import { AuthClientClient } from '@roleypoly/rpc/auth/client';
import { DiscordUser, RoleypolySession, RoleypolyUser } from '@roleypoly/rpc/shared';
import { BrowserHeaders } from 'browser-headers';
import { mount } from 'enzyme';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { rpUser, user } from 'hack/fixtures/storyData';
import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { UserContextProvider, UserState, useUser } from './UserContext';

const mockGetUserSession = jest.spyOn(AuthClientClient.prototype, 'getUserSession');
const testSessionKey = 'testsessionkey123';

type TestShimProps = {
    setKeyTo?: string | null;
    after?: number;
    initialState?: UserState;
};

function TestShim(props: TestShimProps) {
    const { setKeyTo, after } = props;
    const userCtx = useUser();

    if (setKeyTo) {
        React.useEffect(() => {
            setTimeout(() => {
                userCtx.updateSessionKey(setKeyTo);
            }, after || 0);
        }, [setKeyTo, after]);
    }
    return (
        <div>
            {JSON.stringify({ user: userCtx.user, sessionKey: userCtx.sessionKey })}
        </div>
    );
}

function WrappedTestShim(props: TestShimProps) {
    return (
        <UserContextProvider initialState={props.initialState}>
            <TestShim {...props} />
        </UserContextProvider>
    );
}

it('defaults to null state', () => {
    act(() => {
        const view = mount(<WrappedTestShim />);
        const data = JSON.parse(view.text());
        expect(data).toMatchObject({ user: null, sessionKey: null });
    });
});

xit('fetches a user when updated with a sessionKey', () => {
    mockGetUserSession.mockReturnValueOnce(mockSession(testSessionKey, user));

    act(() => {
        const view = mount(<WrappedTestShim setKeyTo={testSessionKey} after={1} />);

        jest.runAllTimers();
        jest.runAllImmediates();
        view.update();

        const data = JSON.parse(view.text());

        expect(data).toMatchObject({ user: rpUser, sessionKey: testSessionKey });
        expect(mockGetUserSession).toBeCalledWith(
            expect.any(Empty),
            expect.any(BrowserHeaders)
        );
    });
});

const mockSession = (sessionKey: string, mockedDiscordUser: DiscordUser.AsObject) => {
    const discordUser = new DiscordUser();
    discordUser.setUsername(mockedDiscordUser.username);
    discordUser.setId(mockedDiscordUser.id);
    discordUser.setDiscriminator(mockedDiscordUser.discriminator);
    discordUser.setAvatar(mockedDiscordUser.avatar);
    discordUser.setBot(mockedDiscordUser.bot);

    const user = new RoleypolyUser();
    user.setDiscorduser(discordUser);

    const session = new RoleypolySession();
    session.setUser(user);
    session.setId(sessionKey);

    return Promise.resolve(session);
};
