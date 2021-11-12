import React, { useContext } from 'react';
import { AppApi } from './AppApi';

type ApiContextValue = AppApi | undefined;

const AppApiContext = React.createContext<ApiContextValue>(undefined);

const useAppApi = () => {
  const apiContext = useContext(AppApiContext);
  
  if(!apiContext) {
    throw new Error('ApiContext used outside of Provider.');
  }
  
  return apiContext;
}

export {
  AppApiContext,
  useAppApi
};
