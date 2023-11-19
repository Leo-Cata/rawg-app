// axios library
import axios from "axios";

// api needs a proxy to be able to fetch, at least in local host
const api = axios.create({
  baseURL: "https://corsproxy.io/?https://ultima.rest/api",
});

export const getRandomQuote = () => {
  return api.get("/random");
};
