// /games search parameters
export interface GamesSearchOptions {
  page?: string;
  search?: string;
  patforms?: number;
  genres?: string;
  tags?: string;
  dates?: string;
  metacritic?: string;
  ordering?: string;
  page_size?: number;
}

// fetched /games type
export interface GamesSearch {
  count: number;
  results: Result[];
}

// where all the data about games are
export interface Result {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  playtime: number;
  parent_platforms: Parent_Platforms[];
  platforms: Platforms[];
  released: string;
}

export interface Parent_Platforms {
  platform: PlatformsObject;
}
// initial platform information and requirements
export interface Platforms {
  platform: PlatformsObject;
}
// details of the platform store
export interface PlatformsObject {
  id: number;
  name: string;
  slug: string;
}

// requirements specs for PC
export interface Requirements {
  minimum: string;
  recommended: string;
}

// props passed to gameCards
export interface GameCardsProps {
  gameName: string;
  gameImage: string;
  // mapKey: string;
  metacritic: number;
  availablePlatforms: Platforms[];
  releaseDate: string;
}

export interface AvailablePlatformsObject {
  platformName: string;
}

// platforms icons
export interface PlatformsIcons {
  [key: string]: JSX.Element;
}
