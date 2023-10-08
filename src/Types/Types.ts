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
}

//fetched /games type
export interface GamesSearch {
  count: number;
  results: Result[];
}

//where all the data about games are
export interface Result {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  playtime: number;
  platforms: Platforms[];
}
export interface Platforms {
  platform: Platform2;
  released_at: string;
  requirements: Requirements;
}

export interface Platform2 {
  id: number;
  slug: string;
  name: string;
}

export interface Requirements {
  minimum: string;
  recommended: string;
}
