import { createTestUser } from './createTestUser';
import { User } from '../app/pages/userPage/User';
import { UserPageApi } from '../app/pages/userPage/UserPageApi';

const defaultUserPageApi: UserPageApi = {
  getUsers: async (): Promise<User[]> => Promise.resolve([ createTestUser() ])
};

const createTestUserApi = (overwrites: Partial<UserPageApi> = {}): UserPageApi => ({
  ...defaultUserPageApi,
  ...overwrites
});

export {
  createTestUserApi
};
