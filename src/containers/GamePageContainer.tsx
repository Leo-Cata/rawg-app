// router params to get them from the url
import { useNavigate, useParams } from "react-router-dom";

// hooks
import { useEffect, useState } from "react";

// api fetchers
import { getGameInfo, getGameScreenshots } from "../services/RawgApi";

// types
import { GameInfo, GameScreenshots } from "../Types/Types";

// component
import GamePage from "../components/GamePage/GamePage";

const GamePageContainer = () => {
  // get the slug from the url
  const { slug } = useParams();

  // state for the game data and the screenshots
  const [gameData, setGameData] = useState<GameInfo>();
  const [gameScreenshots, setGameScreenshots] = useState<GameScreenshots[]>();

  // react router navigation
  const nav = useNavigate();

  useEffect(() => {
    // fetch data about the game if the slug isn't falsy
    const fetchGameInfo = async () => {
      if (slug) {
        try {
          // fetch the info of the game
          const gameInfo = await getGameInfo(slug);
          setGameData(gameInfo.data);

          // get images
          const gameImages = await getGameScreenshots(slug);
          setGameScreenshots(gameImages.data.results);
        } catch (error) {
          console.log(error);
          nav("*");
        }
      }
    };

    fetchGameInfo();
  }, [slug, nav]);

  return (
    <section>
      {gameData && gameScreenshots && (
        <GamePage gameData={gameData} gameScreenshots={gameScreenshots} />
      )}
    </section>
  );
};

export default GamePageContainer;
