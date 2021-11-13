import { AppApi } from './AppApi';
import { AppApiContext } from './AppApiContext';
import { FunctionComponent, ReactElement } from 'react';

interface TestApiContextProviderProps {
  mockApi: AppApi;
}

const TestApiContextProvider: FunctionComponent<TestApiContextProviderProps> = ({ mockApi, children }): ReactElement => (
  <AppApiContext.Provider value={ mockApi }>
    {children}
  </AppApiContext.Provider>
);

export {
  TestApiContextProvider
};
