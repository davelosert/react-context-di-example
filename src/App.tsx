import React, { useEffect, useState } from 'react';
import './App.css';
import { AppConfigContextProvider } from './app/appConfig/AppConfigContextProvider';
import { createFetchTokenApi } from './app/api/FetchTokenApi';
import { ApiToken } from './app/api/TokenApi';
import { FetchApiContextProvider } from './app/appApi/FetchApiContextProvider';
import { UserPage } from './app/pages/userPage/UserPage';

const tokenApi = createFetchTokenApi();

const App = () => {
  const [ apiToken, setApiToken ] = useState<ApiToken>();

  useEffect(() => {
    tokenApi.fetchToken().then((token: ApiToken) => {
      setApiToken(token);
    });
  }, [])

  if(!apiToken) {
    return <p>App initializing...</p>
  }

  return (
    <AppConfigContextProvider apiToken={ apiToken }>
      <FetchApiContextProvider>
        <UserPage />
      </FetchApiContextProvider>
  </AppConfigContextProvider>
  );
}

export { App };
