import { User } from "./User";

interface UserPageApi {
  getUsers: () => Promise<User[]>
}

export type {
  UserPageApi
};
