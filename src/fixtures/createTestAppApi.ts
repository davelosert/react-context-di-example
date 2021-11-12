import { AppApi } from "../app/appApi/AppApi";
import { createTestUserApi } from "./createTestUserPageApi";

const defaultTestAppApi: AppApi = {
  userApi: createTestUserApi()
};

const createTestAppApi = (overwrites: Partial<AppApi> = {}): AppApi => ({
  ...defaultTestAppApi,
  ...overwrites
});

export {
  createTestAppApi
};
