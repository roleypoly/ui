import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import { AuthClientClient } from '@roleypoly/rpc/auth/client';
import getConfig from 'next/config';
import * as React from 'react';
import { withContext } from 'utils/withContext';

export const authClient = () =>
    new AuthClientClient(getConfig().publicRuntimeConfig.platformUrl, {
        transport:
            typeof XMLHttpRequest === 'undefined' ? NodeHttpTransport() : undefined, // tslint:disable-line
    });

export const AuthClientContext = React.createContext(authClient);

export const usePlatform = () => React.useContext(AuthClientContext);

export const withPlatform = <T>(Component: React.ComponentType<T>) =>
    withContext(AuthClientContext, Component as any);
