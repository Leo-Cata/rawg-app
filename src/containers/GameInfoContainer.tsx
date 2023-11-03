import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getGameInfo, getGameScreenshots } from "../services/RawgApi";
import { GameInfo, GameScreenshots } from "../Types/Types";
import GamePage from "../components/GamePage/GamePage";

const GameInfoContainer = () => {
  // get the slug from the url
  const { slug } = useParams();

  // state for the game data and the screenshots
  const [gameData, setGameData] = useState<GameInfo>();
  const [gameScreenshots, setGameScreenshots] = useState<GameScreenshots[]>();

  console.log(gameScreenshots);
  console.log(gameData);

  useEffect(() => {
    // fetch data about the game if the slug isn't falsy
    const fetchGameInfo = async () => {
      if (slug) {
        try {
          // fetch the info of the game
          const gameInfo = await getGameInfo(slug);
          //
          setGameData(gameInfo.data);
          const gameImages = await getGameScreenshots(slug);
          setGameScreenshots(gameImages.data.results);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchGameInfo();
  }, [slug]);

  return <>{gameData && <GamePage gameData={gameData} />}</>;
};

export default GameInfoContainer;
