import { createTestAppApi } from '../../../fixtures/createTestAppApi';
import { createTestUser } from '../../../fixtures/createTestUser';
import { createTestUserApi } from '../../../fixtures/createTestUserPageApi';
import sinon from 'sinon';
import { TestApiContextProvider } from '../../appApi/TestApiContextProvider';
import { User } from './User';
import { UserPage } from './UserPage';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

describe('<UserPage />', (): void => {
  it('shows useres after loading from api.', async (): Promise<void> => {
    const testUsers = [
      createTestUser({ firstName: 'First', lastName: 'User', id: 'uuid1' }),
      createTestUser({ firstName: 'Second', lastName: 'User', id: 'uuid2' })
    ];
    const testApi = createTestAppApi({
      userApi: createTestUserApi({
        getUsers: async (): Promise<User[]> => Promise.resolve(testUsers)
      })
    });

    render(
      <TestApiContextProvider mockApi={ testApi }>
        <UserPage />
      </TestApiContextProvider>
    );

    // You only have to await the first one, the second should then be also there
    expect(await screen.findByText('First User')).toBeInTheDocument();
    expect(screen.getByText('Second User')).toBeInTheDocument();
  });

  it('shows loading state until api returns.', async (): Promise<void> => {
    const userPromise = sinon.promise<User[]>();

    const testApi = createTestAppApi({
      userApi: createTestUserApi({
        getUsers: async (): Promise<User[]> => userPromise
      })
    });

    render(
      <TestApiContextProvider mockApi={ testApi }>
        <UserPage />
      </TestApiContextProvider>
    );
    const loadingText = screen.getByText('Loading...');

    expect(loadingText).not.toBeNull();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    userPromise.resolve([ createTestUser() ]);

    await waitForElementToBeRemoved(loadingText);

    expect(screen.queryByText('Loading...')).toBeNull();
  });
});
