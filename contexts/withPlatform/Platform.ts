import * as React from 'react';
import { PlatformClient } from '@roleypoly/rpc/platform';
import { withContext } from 'utils/withContext';
import { NodeHttpTransport } from '@improbable-eng/grpc-web-node-http-transport';

export const platformClient = new PlatformClient(
  process.env.PLATFORM_SVC_HOST || 'https://localhost:5066',
  {
    transport: NodeHttpTransport(),
  }
);

export const PlatformContext = React.createContext(platformClient);

export const usePlatform = () => React.useContext(PlatformContext);

export const withPlatform = <T>(Component: React.ComponentType<T>) =>
  withContext(PlatformContext, Component as any);
