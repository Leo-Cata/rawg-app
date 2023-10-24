import axios from "axios";
import { GamesSearchOptions } from "../Types/Types";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
    // search_exact: true,
    search_precise: true,
  },
});

//fetch from /games with optional paging
export const getGames = (options: GamesSearchOptions = {}) => {
  return api.get(`/games`, {
    params: options,
  });
};

export const getPlatformsLists = () => {
  return api.get("platforms/lists/parents");
};
