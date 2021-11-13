import { AppApi } from './AppApi';
import React, { useContext } from 'react';

type ApiContextValue = AppApi | undefined;

// eslint-disable-next-line unicorn/no-useless-undefined
const AppApiContext = React.createContext<ApiContextValue>(undefined);

const useAppApi = (): AppApi => {
  const apiContext = useContext(AppApiContext);

  if (!apiContext) {
    throw new Error('ApiContext used outside of Provider.');
  }

  return apiContext;
};

export {
  AppApiContext,
  useAppApi
};
