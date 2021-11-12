import { ApiToken, TokenApi } from "./TokenApi";

const createFetchTokenApi = (): TokenApi => ({
  fetchToken: async (): Promise<ApiToken> => {
    const response = await fetch('http://localhost:3001/token', { 
      headers: {
        'content-type': 'application/json'
      },
    });
    
    if(!response.ok) {
      throw new Error(`Http-Error with status ${response.status}`);
    }

    console.log(response);
    const tokenResponse = await response.json();
    console.log(tokenResponse);
    return tokenResponse.apiToken;
  }
});

export {
  createFetchTokenApi
};
