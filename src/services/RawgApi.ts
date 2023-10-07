import axios from "axios";

const api = axios.create({
  baseURL: "https://api.rawg.io/api",
});

//fetch from /games with optional paging
export const getGames = (page?: number) => {
  return api.get(`/games`, {
    params: {
      key: import.meta.env.VITE_REACT_APP_RAWG_API_KEY,
      page: page,
    },
  });
};
