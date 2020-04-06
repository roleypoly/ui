import { onSessionKeyChange, withBearer, setSessionKey } from './rpc';

const testSessionKey = 'testsession12345';

beforeEach(() => {
    setSessionKey(null);
});

it('sends a change event when session key is updated', () => {
    const handler = jest.fn();
    onSessionKeyChange(handler);
    setSessionKey(testSessionKey);

    expect(handler).toBeCalledWith(testSessionKey);
});

it('does not send a change event if the session key is identical', () => {
    const handler = jest.fn();
    onSessionKeyChange(handler);
    setSessionKey(testSessionKey);
    setSessionKey(testSessionKey);

    expect(handler).toBeCalledTimes(1);
});

it('builds a bearer token with the currently set session key', () => {
    setSessionKey(testSessionKey);
    const bearer = withBearer().get('Authorization')[0];

    expect(bearer).toBe(`Bearer ${testSessionKey}`);
});

it('builds an empty token if bearer token is null', () => {
    setSessionKey(null);
    const bearer = withBearer().get('Authorization')[0];

    expect(bearer).toBe('');
});
