import { useContext, useEffect, useState } from "react";
import { getGames } from "../services/RawgApi";
import { GamesSearch, UserFavGames } from "../Types/Types";
import GameCards from "../components/GameCards/GameCards";
import { Stack } from "@mui/material";
import { readData } from "../Firebase/Database";
import { userIdContext } from "../context/UserContext";
import SearchBar from "../components/SearchBar";
import OrderSelector from "../components/OrderSelector";
import CustomPagination from "../components/CustomPagination";

const GamesContainer = () => {
  // set page number
  const [pageNumber, setPageNumber] = useState<number>(1);

  // state to save and set gamesOrdering
  const [gamesOrdering, setGamesOrdering] = useState("relevance");

  // state to search for a game
  const [gameSearchString, setGameSearchString] = useState<string>("");

  //save game data
  const [gameData, setGameData] = useState<GamesSearch>();

  // state for when the windows width changes
  const [numberOfGroups, setNumberOfGroups] = useState<number>(4);

  // get userId context and fav games
  const userId = useContext(userIdContext)?.userId;
  const [userFavGames, setUserFavGames] = useState<
    UserFavGames[] | undefined
  >();

  //fetch all games by popularity and if the userId exists, get fav games
  useEffect(() => {
    const fetchGames = async () => {
      try {
        if (userId) {
          const firestoreData = await readData(userId);
          setUserFavGames(firestoreData?.games);
        }
        const resp = await getGames({
          page_size: 32,
          search: gameSearchString,
          ordering: gamesOrdering,
          page: pageNumber,
        });
        setGameData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, [userId, gameSearchString, gamesOrdering, pageNumber]);
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
    // loops numberOfGroups times
    for (let i = 0; i < numberOfGroups; i++) {
      // initialize group array during each loop, allowing you have multiple groups in groupedData
      const group = [];

      // loop that starts at index i, while j is less than the length of the result, then skip numberOfGroups amount of elements, this allows you to create groups like [0,3,6], [1,4,7] so it looks accordingly in the grid
      for (let j = i; j < gameData.results.length; j += numberOfGroups) {
        // pushes the game with index j to the group
        group.push(gameData?.results[j]);
      }
      // at the end, push the group into the groupedData array
      groupedData.push(group);
    }
  }

  return (
    <Stack spacing={4}>
      <Stack className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-4">
        <OrderSelector
          setGamesOrdering={setGamesOrdering}
          gamesOrdering={gamesOrdering}
        />
        <SearchBar setGameSearchString={setGameSearchString} />
      </Stack>
      <Stack
        className={`grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}
      >
        {groupedData &&
          groupedData.map((group, index) => (
            <Stack
              key={group[index]?.slug || `group_${index}`}
              className="space-y-4"
            >
              {group.map((game) => (
                <GameCards
                  gameName={game.name}
                  gameImage={game.background_image}
                  key={game.slug}
                  metacritic={game.metacritic}
                  availablePlatforms={game.parent_platforms}
                  releaseDate={game.released}
                  userId={userId}
                  // if there is user id, check if the array has a matching name
                  isInFavorite={
                    userId
                      ? userFavGames?.some(
                          (favGame) => favGame.gameName === game.name,
                        )
                      : false
                  }
                />
              ))}
            </Stack>
          ))}
      </Stack>
      <CustomPagination
        setPageNumber={setPageNumber}
        searchCount={gameData?.count}
      />
    </Stack>
  );
};

export default GamesContainer;
