import { createContext } from 'react';

export type CatalogConfig = {
  id: string;
  type: string;
  name?: string;
  showInHome: boolean;
  enabled: boolean;
};

export type ConfigContextType = {
  rpdbkey: string;
  geminikey: string;
  mdblistkey: string;
  includeAdult: boolean;
  provideImdbId: boolean;
  tmdbPrefix: boolean;
  hideEpisodeThumbnails: boolean;
  language: string;
  sessionId: string;
  streaming: string[];
  catalogs: CatalogConfig[];
  ageRating: string | undefined;
  searchEnabled: boolean;
  hideInCinemaTag: boolean;
  castCount: number | undefined;
  setRpdbkey: (rpdbkey: string) => void;
  setGeminiKey: (geminikey: string) => void;
  setMdblistkey: (mdblistkey: string) => void;
  setIncludeAdult: (includeAdult: boolean) => void;
  setProvideImdbId: (provideImdbId: boolean) => void;
  setTmdbPrefix: (tmdbPrefix: boolean) => void;
  setHideEpisodeThumbnails: (hideEpisodeThumbnails: boolean) => void;
  setLanguage: (language: string) => void;
  setSessionId: (sessionId: string) => void;
  setStreaming: (streaming: string[]) => void;
  setCatalogs: (catalogs: CatalogConfig[] | ((prev: CatalogConfig[]) => CatalogConfig[])) => void;
  setAgeRating: (ageRating: string | undefined) => void;
  setSearchEnabled: (enabled: boolean) => void;
  setHideInCinemaTag: (hide: boolean) => void;
  setCastCount: (count: number | undefined) => void;
  loadConfigFromUrl: () => void;
};

export const ConfigContext = createContext<ConfigContextType | undefined>(undefined); 