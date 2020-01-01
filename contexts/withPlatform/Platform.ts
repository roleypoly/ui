import * as React from 'react';
import { PlatformClient } from '@roleypoly/rpc/platform';
import { withContext } from 'utils/withContext';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';
import getConfig from 'next/config';

export const platformClient = new PlatformClient(
  getConfig().publicRuntimeConfig.platformUrl,
  {
    transport: typeof XMLHttpRequest === 'undefined' ? NodeHttpTransport() : undefined,
  }
);

export const PlatformContext = React.createContext(platformClient);

export const usePlatform = () => React.useContext(PlatformContext);

export const withPlatform = <T>(Component: React.ComponentType<T>) =>
  withContext(PlatformContext, Component as any);
