import { ApiToken } from "../api/TokenApi";
import { AppConfig, AppConfigValues, Language } from "./AppConfig";
import React, { FunctionComponent, useContext, useState } from 'react';

// @ts-expect-error Undefined is actually allowed - we prevent using it further down in the hook
const AppConfigContext = React.createContext<AppConfig>(undefined);

interface AppConfigContextProviderProps {
  apiToken: ApiToken
}

const AppConfigContextProvider: FunctionComponent<AppConfigContextProviderProps> = ({ children, apiToken }) => {
  const [ appConfigValues, setAppConfigValues ] = useState<AppConfigValues>({
        apiToken,
        language: 'de-DE',
  });

  const setLanguage = (language: Language) => {
    setAppConfigValues({
        apiToken,
        language,
    });
  }
  
  return (
    <AppConfigContext.Provider value={{
      ...appConfigValues,
      setLanguage
    }}>
      { children }
    </AppConfigContext.Provider>
  )
}

const useAppConfig = (): AppConfig => {
  const appConfig = useContext(AppConfigContext);

  if(!appConfig) {
    throw new Error('Do not use the App-Config before it is initialized!');
  }

  return appConfig;
}

export {
  AppConfigContextProvider,
  useAppConfig
};
