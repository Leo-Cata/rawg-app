// axios library import
import axios from "axios";

// type
import { GamesSearchOptions } from "../Types/Types";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
    // search_exact: true, change this to search for exact matches
    search_precise: true,
  },
});

//fetch from /games with optional paging
export const getGames = (options: GamesSearchOptions = {}) => {
  return api.get(`/games`, {
    params: options,
  });
};

// helper to get all platforms list
export const getPlatformsLists = () => {
  return api.get("platforms/lists/parents");
};

// fetch for a game
export const getGameInfo = (slug: string) => {
  return api.get(`games/${slug}`);
};

// fetch game screenshots
export const getGameScreenshots = (slug: string) => {
  return api.get(`games/${slug}/screenshots`);
};

// fetch all genres
export const getGenresList = () => {
  return api.get("/genres");
};
