type ApiToken = string;

interface TokenApi {
  fetchToken: () => Promise<ApiToken>;
}

export type {
  ApiToken,
  TokenApi
};
