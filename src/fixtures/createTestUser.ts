import { User } from "../app/pages/userPage/User";

const defaultUser: User = {
  id: 'uuid1',
  firstName: 'Kim',
  lastName: 'Miller'
}

const createTestUser = (overwrites: Partial<User> = {}): User => ({
  ...defaultUser,
  ...overwrites
});

export {
  createTestUser
};
