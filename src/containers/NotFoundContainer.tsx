import { useEffect } from "react";
import NotFound from "../components/NotFound";
// import { getRandomQuote } from "../services/UltimaApi";

const NotFoundContainer = () => {
  // api not working
  useEffect(() => {
    // const getQuote = async () => {
    //   const resp = await getRandomQuote();
    //   console.log(resp);
    // };
    // getQuote();
  }, []);

  return <NotFound />;
};

export default NotFoundContainer;
