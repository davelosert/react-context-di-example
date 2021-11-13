import { AppApi } from './AppApi';
import { AppApiContext } from './AppApiContext';
import { createFetchUserApi } from '../api/FetchUserApi';
import { useAppConfig } from '../appConfig/AppConfigContextProvider';
import { FunctionComponent, ReactElement } from 'react';

const FetchApiContextProvider: FunctionComponent = ({ children }): ReactElement => {
  const { language, apiToken } = useAppConfig();
  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const appApi: AppApi = {
    userApi: createFetchUserApi(apiToken, language)
  };

  return (
    <AppApiContext.Provider value={ appApi }>
      {children}
    </AppApiContext.Provider>
  );
};

export {
  FetchApiContextProvider
};
