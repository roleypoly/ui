import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import { PlatformClient } from '@roleypoly/rpc/platform';
import getConfig from 'next/config';
import * as React from 'react';
import { withContext } from 'utils/withContext';

export const platformClient = () =>
    new PlatformClient(getConfig().publicRuntimeConfig.platformUrl, {
        transport:
            typeof XMLHttpRequest === 'undefined' ? NodeHttpTransport() : undefined, // tslint:disable-line
    });

export const PlatformContext = React.createContext(platformClient);

export const usePlatform = () => React.useContext(PlatformContext);

export const withPlatform = <T>(Component: React.ComponentType<T>) =>
    withContext(PlatformContext, Component as any);
