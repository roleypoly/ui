import { PlatformClient } from '@roleypoly/rpc/platform';
import { AuthClientClient } from '@roleypoly/rpc/auth/client';
import { BrowserHeaders } from 'browser-headers';
import { EventEmitter } from 'events';

type RPCConfig = {
    sessionKey: string | null;
};

const globalConfig: RPCConfig = {
    sessionKey: null,
};

export const Platform = new PlatformClient('/rpc/platform');
export const Auth = new AuthClientClient('/rpc/auth');

export const withBearer = (key: RPCConfig['sessionKey'] = globalConfig.sessionKey) =>
    new BrowserHeaders({
        Authorization: key ? `Bearer ${key}` : ``,
    });

const eventEmitter = new EventEmitter();
const $SessionKeyChange = Symbol('sessionkey:change');

export const setSessionKey = (sessionKey: RPCConfig['sessionKey']) => {
    if (globalConfig.sessionKey === sessionKey) {
        return;
    }

    globalConfig.sessionKey = sessionKey;
    eventEmitter.emit($SessionKeyChange, sessionKey);
};

export const onSessionKeyChange = (handler: (newKey: RPCConfig['sessionKey']) => void) =>
    eventEmitter.on($SessionKeyChange, handler);
