import { FunctionComponent } from "react";
import { AppApiContext } from "./AppApiContext";
import { useAppConfig } from "../appConfig/AppConfigContextProvider";
import { AppApi } from "./AppApi";
import { createFetchUserApi } from "../api/FetchUserApi";


const FetchApiContextProvider: FunctionComponent = ({ children }) => {
  const { language, apiToken } = useAppConfig();
  const appApi: AppApi = {
    userApi: createFetchUserApi(apiToken, language)
  };

  return (
    <AppApiContext.Provider value={appApi}>
      {children}
    </AppApiContext.Provider>
  )
}

export {
  FetchApiContextProvider
};
