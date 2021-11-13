import { ApiToken } from '../api/TokenApi';
import { AppConfig, AppConfigValues, Language } from './AppConfig';
import React, { FunctionComponent, ReactElement, useContext, useState } from 'react';

type AppConfigContextValue = AppConfig | undefined;
// eslint-disable-next-line unicorn/no-useless-undefined
const AppConfigContext = React.createContext<AppConfigContextValue>(undefined);

interface AppConfigContextProviderProps {
  apiToken: ApiToken;
}

const AppConfigContextProvider: FunctionComponent<AppConfigContextProviderProps> = ({ children, apiToken }): ReactElement => {
  const [ appConfigValues, setAppConfigValues ] = useState<AppConfigValues>({
    apiToken,
    language: 'de-DE'
  });

  const setLanguage = (language: Language): void => {
    setAppConfigValues({
      apiToken,
      language
    });
  };

  return (
    <AppConfigContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        ...appConfigValues,
        setLanguage
      }}
    >
      { children }
    </AppConfigContext.Provider>
  );
};

const useAppConfig = (): AppConfig => {
  const appConfig = useContext(AppConfigContext);

  if (!appConfig) {
    throw new Error('Cant use AppConfig outside of Provider.');
  }

  return appConfig;
};

export {
  AppConfigContextProvider,
  useAppConfig
};
