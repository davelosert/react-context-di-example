import { ApiToken } from './app/api/TokenApi';
import { AppConfigContextProvider } from './app/appConfig/AppConfigContextProvider';
import { createFetchTokenApi } from './app/api/FetchTokenApi';
import { FetchApiContextProvider } from './app/appApi/FetchApiContextProvider';
import { UserPage } from './app/pages/userPage/UserPage';
import React, { FunctionComponent, ReactElement, useEffect, useState } from 'react';
import './App.css';

const tokenApi = createFetchTokenApi();

const App: FunctionComponent = (): ReactElement => {
  const [ apiToken, setApiToken ] = useState<ApiToken>();

  useEffect((): void => {
    tokenApi.fetchToken().
      then((token: ApiToken): void => {
        setApiToken(token);
      }).
      catch((ex): void => {
        // eslint-disable-next-line no-console
        console.error(`Error while loading token:`, { err: ex });
      });
  }, []);

  if (!apiToken) {
    return <p>App initializing...</p>;
  }

  return (
    <AppConfigContextProvider apiToken={ apiToken }>
      <FetchApiContextProvider>
        <UserPage />
      </FetchApiContextProvider>
    </AppConfigContextProvider>
  );
};

export { App };
