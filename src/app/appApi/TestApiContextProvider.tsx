import { FunctionComponent } from "react";
import { AppApi } from "./AppApi";
import { AppApiContext } from "./AppApiContext";

interface TestApiContextProviderProps {
  mockApi: AppApi;
};

const TestApiContextProvider: FunctionComponent<TestApiContextProviderProps> = ({ mockApi, children }) => (
<AppApiContext.Provider value={ mockApi }>
  {children}
</AppApiContext.Provider>
)

export {
  TestApiContextProvider
};
