import { useContext, useEffect, useState } from "react";
import { getGames } from "../services/RawgApi";
import { GameData, GamesSearch } from "../Types/Types";
import GameCards from "../components/GameCards/GameCards";
import { Stack } from "@mui/material";
import { readData } from "../Firebase/Database";
import { userIdContext } from "../context/UserContext";
import SearchBar from "../components/SearchBar";
import OrderSelector from "../components/OrderSelector";
import CustomPagination from "../components/CustomPagination";
import groupData from "../utils/GroupedData";
import CardsSkeleton from "../components/CardsSkeleton";

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

  // get userId context and fav games state
  const userId = useContext(userIdContext)?.userId;

  const [savedGames, setSavedGames] = useState<GameData[] | undefined>();

  const itemsPerPage: number = 32;

  //fetch all games by popularity and if the userId exists, get fav games
  useEffect(() => {
    const fetchGames = async () => {
      try {
        if (userId) {
          setGameData(undefined);
          // gets the data from firestore
          const firestoreData = await readData(userId);

          // and sets it
          setSavedGames(firestoreData?.games);
        }
        const resp = await getGames({
          page_size: itemsPerPage,
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
  }, [userId, gameSearchString, gamesOrdering, pageNumber, setSavedGames]);

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

  // pass the game data and the number of groups and return an array of arrays
  const groupedData = groupData(gameData?.results, numberOfGroups);

  return (
    <Stack spacing={4} paddingX={2}>
      {/* order selector and search bar */}
      <Stack className="flex flex-col-reverse pt-6 sm:flex-row sm:justify-between sm:space-x-4">
        <OrderSelector
          setGamesOrdering={setGamesOrdering}
          gamesOrdering={gamesOrdering}
        />
        <SearchBar setGameSearchString={setGameSearchString} />
      </Stack>

      {/* game cards/skeleton */}
      <Stack className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {gameData ? (
          groupedData.map((group, index) => (
            <Stack
              key={group[index]?.slug || `group_${index}`}
              className="space-y-4"
            >
              {group.map((game) => (
                <GameCards
                  name={game.name}
                  background_image={game.background_image}
                  key={game.slug}
                  metacritic={game.metacritic}
                  parent_platforms={game.parent_platforms}
                  released={game.released}
                  userId={userId}
                  slug={game.slug}
                  // if there is user id, check if the array has a matching name
                  isInFavorite={
                    userId
                      ? savedGames?.some(
                          (favGame) => favGame.name === game.name,
                        )
                      : false
                  }
                />
              ))}
            </Stack>
          ))
        ) : (
          <CardsSkeleton itemsPerPage={itemsPerPage} />
        )}
      </Stack>

      {/* pagination */}
      <CustomPagination
        setPageNumber={setPageNumber}
        itemsCount={gameData?.count}
        itemsPerPage={itemsPerPage}
      />
    </Stack>
  );
};

export default GamesContainer;
