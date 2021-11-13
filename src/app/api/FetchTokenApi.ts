import { ApiToken, TokenApi } from './TokenApi';

const createFetchTokenApi = (): TokenApi => ({
  async fetchToken (): Promise<ApiToken> {
    const response = await fetch('http://localhost:3001/token', {
      headers: {
        'content-type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Http-Error with status ${response.status}`);
    }

    const tokenResponse = await response.json();

    return tokenResponse.apiToken;
  }
});

export {
  createFetchTokenApi
};
