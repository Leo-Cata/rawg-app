import { AlertColor } from "@mui/material";

// /games search parameters
export interface GamesSearchOptions {
  page?: number;
  search?: string | undefined;
  platforms?: number;
  genres?: number;
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
  slug: string;
  name: string;
  background_image: string;
  metacritic: number;
  playtime?: number;
  parent_platforms: Parent_Platforms[];
  platforms: Platforms[];
  released: string;
}

export interface GameData extends Omit<Result, "id" | "platforms"> {
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
export interface appContextValues {
  userId: string | null;
  handleUserId: HandleUserId;
  savedGames: GameData[] | undefined;
  setSavedGames: (value: GameData[]) => void;
  searchGenres: number | undefined;
  setSearchGenres: (value: number | string | undefined) => void;
  searchDates: string | undefined;
  setSearchDates: (value: string | number | undefined) => void;
  searchPlatforms: number | undefined;
  setSearchPlatforms: (value: number | string | undefined) => void;
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

// separated from pagination props to be used alone
export interface ItemsPerPage {
  itemsPerPage: number;
}

// pagination props
export interface PaginationPropsType extends ItemsPerPage {
  setPageNumber: (value: number) => void;
  pageNumber: number;
  itemsCount: number | undefined;
}

// game info starts

// interface of the data you get when fetching a game
export interface GameInfo {
  slug: string;
  name: string;
  description: string;
  metacritic: number;
  metacritic_platforms: Metacritic_Platforms[];
  released: string;
  website: string;
  playtime: number;
  achievements: number;
  esrb_rating: Esrb_rating;
  platforms: GameInfoPlatform[];
  parent_platforms: Parent_Platforms[];
  background_image: string;
  genres: Tags[];
  tags: Tags[];
  developers: Tags[];
  publishers: Tags[];
}
// metacritic and their urls
interface Metacritic_Platforms {
  metascore: number;
  ulr: string;
}

// esrb rating
interface Esrb_rating {
  name: string;
}

// extends platforms and adds the release date and an object
export interface GameInfoPlatform extends Platforms {
  released_at: string;
  requirements: Requirements;
}

export interface Tags {
  name: string;
  id: number;
}

// game screenshots results
export interface GameScreenshots {
  image: string;
}

// game page tags
export interface GameTagsProps {
  title: string;
  text?: string;
}

// add games util setters
export interface AddGamesProps extends Omit<GameData, "isInFavorite"> {
  setIsSnackbarOpen: (value: boolean) => void;
  setSnackbarMessage: (value: string) => void;
  setSeverity: (value: AlertColor) => void;
  setIsBookmarked: (value: (prev: boolean | undefined) => boolean) => void;
  isBookmarked: boolean | undefined;
  userId: string | undefined | null;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: Parent_Platforms[];
  released: string;
  slug: string;
}

// search bar value state
export interface SearchValue {
  holdValue: string;
  setHoldValue: (value: string) => void;
}

// quote type
export interface GameQuote {
  quote: string;
  character: string;
  title: string;
}

//genre list
export interface SidePanelObject {
  id: number | string;
  name: string;
  slug?: string;
  image_background?: string;
}

//side panel props
export interface SidePanelProp {
  title: string;
  stateValue: string | number | undefined;
  setStateValue: (value: string | number | undefined) => void;
  objectToMap: SidePanelObject[];
}
