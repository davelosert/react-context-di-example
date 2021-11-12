import { createTestUser } from "./createTestUser";
import { UserPageApi } from "../app/pages/userPage/UserPageApi";

const defaultUserPageApi: UserPageApi = {
  getUsers: () => Promise.resolve([ createTestUser()])
}

const createTestUserApi = (overwrites: Partial<UserPageApi> = {}): UserPageApi => ({
  ...defaultUserPageApi,
  ...overwrites
});

export {
  createTestUserApi
};
