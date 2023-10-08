import { useEffect, useState } from "react";
import { getGames } from "../services/RawgApi";
import { GamesSearch } from "../Types/Types";

const GamesContainer = () => {
  //save game data
  const [gameData, setGameData] = useState<GamesSearch>();

  //fetch all games by popularity
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const resp = await getGames();
        setGameData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, []);

  console.log(gameData);
  return (
    <div>
      {gameData &&
        gameData.results.map((game) => (
          <div key={game.id}>
            <h6>{game.name}</h6>
          </div>
        ))}
    </div>
  );
};

export default GamesContainer;
