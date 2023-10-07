import { useEffect, useState } from "react";
import { getGames } from "../services/RawgApi";

const GamesContainer = () => {
  const [gameData, setGameData] = useState([]);
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
        gameData.results.map((data) => <h6 key={data.id}>{data.name}</h6>)}
    </div>
  );
};

export default GamesContainer;
