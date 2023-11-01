// /games search parameters
export interface GamesSearchOptions {
  page?: number;
  search?: string | undefined;
  platforms?: number;
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
  id?: number;
  slug?: string;
  name: string;
  background_image: string;
  metacritic: number;
  playtime?: number;
  parent_platforms: Parent_Platforms[];
  platforms: Platforms[];
  released: string;
}

export interface GameData
  extends Omit<Result, "id" | "playtime" | "platforms"> {
  userId?: string | undefined | null;
  isInFavorite?: boolean;
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
  metacritic: number;
  availablePlatforms: Platforms[];
  releaseDate: string;
  userId?: string | null;
  isInFavorite?: boolean;
}

// available platforms to make an object for gameCardsProps
export interface AvailablePlatformsObject {
  platformName: string;
}

// platforms icons
export interface PlatformsIcons {
  [key: string]: JSX.Element;
}

// user id setter function
export interface HandleUserId {
  (uid: string | null): void;
}

// createContext type
export interface UserContextValues {
  userId: string | null;
  handleUserId: HandleUserId;
  savedGames: GameData[] | undefined;
  setSavedGames: (value: GameData[]) => void;
}

// Search setter type
export interface SetSearch {
  setGameSearchString: (value: string) => void;
}

// profileData
export interface UserDataType {
  userDisplayName: string | undefined | null;
  userPhoto: string | undefined | null;
  handleUserId?: HandleUserId;
}

export interface ProfileData extends Omit<UserDataType, "UserDataType"> {
  savedGamesLength: number | undefined;
  userId: string | undefined | null;
}

// profile data Setter
export interface SetProfileData {
  (value: UserDataType): void;
}

// loading setter interface
export interface SetIsLoaded {
  (value: boolean): void;
}

export interface ItemsPerPage {
  itemsPerPage: number;
}

export interface PaginationPropsType extends ItemsPerPage {
  setPageNumber: (value: number) => void;
  itemsCount: number | undefined;
}
