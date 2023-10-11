import { useEffect, useState } from "react";
import { getGames } from "../services/RawgApi";
import { GamesSearch } from "../Types/Types";
import GameCards from "../components/GameCards";
import { Box, Stack } from "@mui/material";

const GamesContainer = () => {
  //save game data
  const [gameData, setGameData] = useState<GamesSearch>();
  const [numberOfGroups, setNumberOfGroups] = useState<number>(4);

  //fetch all games by popularity
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const resp = await getGames({ page_size: 40 });
        setGameData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGames();
  }, []);

  // useEffect to set the windows width
  useEffect(() => {
    const handleResize = () => {
      // gets the current viewport width to set the numbers of groups
      const newViewportWidth = window.innerWidth;
      if (newViewportWidth <= 639) {
        setNumberOfGroups(1);
      } else if (newViewportWidth <= 767) {
        setNumberOfGroups(2);
      } else if (newViewportWidth <= 1279) {
        setNumberOfGroups(3);
      } else {
        setNumberOfGroups(4);
      }
    };
    // runs the code once to set the initial value
    handleResize();

    // runs whenever the windows is resized
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Initialize an array to store the grouped data
  const groupedData = [];

  // check if gameData is true then loop to create groups of data
  if (gameData) {
    for (let i = 0; i < numberOfGroups; i++) {
      const group = [];
      for (let j = i; j < gameData.results.length; j += numberOfGroups) {
        group.push(gameData?.results[j]);
      }
      groupedData.push(group);
    }
  }

  return (
    <Box
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}
    >
      {groupedData &&
        groupedData.map((group, index) => (
          <Stack key={group[index].slug} className="mx-auto space-y-4 sm:mx-0">
            {group.map((game) => (
              <GameCards
                gameName={game.name}
                gameImage={game.background_image}
                // mapKey={game.slug}
                key={game.slug}
                metacritic={game.metacritic}
                availablePlatforms={game.parent_platforms}
                releaseDate={game.released}
              />
            ))}
          </Stack>
        ))}
    </Box>
  );
};

export default GamesContainer;
