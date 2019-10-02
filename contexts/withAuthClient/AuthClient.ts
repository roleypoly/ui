import * as React from 'react';
import { AuthClientClient } from '@roleypoly/rpc/auth/client';
import { withContext } from 'utils/withContext';

export const AuthClientContext = React.createContext(
  new AuthClientClient(process.env.AUTH_SVC_HOST || '')
);

export const useAuthClient = () => React.useContext(AuthClientContext);

export const withAuthClient = <T>(Component: React.ComponentType<T>) =>
  withContext(AuthClientContext, Component as any);
