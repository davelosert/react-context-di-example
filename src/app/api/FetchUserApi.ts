import { User } from "../pages/userPage/User";
import { Language } from "../appConfig/AppConfig";
import { ApiToken } from "./TokenApi";
import { UserPageApi } from "../pages/userPage/UserPageApi";

const createFetchUserApi = (token: ApiToken, language: Language): UserPageApi => ({
  getUsers: async (): Promise<User[]> => {
    const response = await fetch('http://localhost:3001/user', { 
      headers: {
        'content-type': 'application/json',
        'content-language': language,
        'Authorization': `Bearer ${token}`
      }
    });
    
    if(!response.ok) {
      throw new Error(`Http-Error with status ${response.status}`);
    }

    return await response.json();
  }
});

export {
  createFetchUserApi
};
