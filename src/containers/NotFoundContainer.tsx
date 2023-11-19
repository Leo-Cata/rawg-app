import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import { getRandomQuote } from "../services/UltimaApi";
import { GameQuote } from "../Types/Types";

const NotFoundContainer = () => {
  const [gameQuote, setGameQuote] = useState<GameQuote | undefined>();

  // gets quote from ultima.rest
  useEffect(() => {
    const getQuote = async () => {
      const resp = await getRandomQuote();
      setGameQuote(resp.data);
    };
    getQuote();
  }, []);
  return <NotFound gameQuote={gameQuote && gameQuote} />;
};

export default NotFoundContainer;
