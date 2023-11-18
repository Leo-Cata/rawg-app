// axios library
import axios from "axios";

// api currently not working
const api = axios.create({ baseURL: "https://ultima.rest/api" });

export const getRandomQuote = () => {
  return api.get("/random");
};
