import { ApiToken } from '../api/TokenApi';

type Language = 'de-DE' | 'en-US';

interface AppConfigValues {
  apiToken: ApiToken;
  language: Language;
}

interface AppConfigMutators {
  setLanguage: (language: Language) => void;
}

type AppConfig = AppConfigValues & AppConfigMutators;

export type {
  AppConfig,
  AppConfigValues,
  AppConfigMutators,
  Language
};
