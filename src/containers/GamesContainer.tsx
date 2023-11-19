// react hooks
import { useContext, useEffect, useState } from "react";

// api fetcher
import { getGames } from "../services/RawgApi";

// types
import { GameData, GamesSearch } from "../Types/Types";

// cards component for mapping
import GameCards from "../components/GameCards/GameCards";

// mui component
import { Stack } from "@mui/material";

//firebase data fetcher
import { readData } from "../Firebase/Database";

//context
import { userIdContext } from "../context/UserContext";

// order selector component
import OrderSelector from "../components/OrderSelector";

// pagination
import CustomPagination from "../components/CustomPagination";

// utils to group the data depending on the windows width
import groupData from "../utils/GroupedData";
import { handleResize } from "../utils/WindowWidth";

// skeleton
import CardsSkeleton from "../components/CardsSkeleton";

// get params from url
import { useParams } from "react-router-dom";
import GamesNotFound from "../components/GamesNotFound";

const GamesContainer = () => {
  // gets the slug from the browsers search bar
  const URLSlug = useParams();

  // set page number
  const [pageNumber, setPageNumber] = useState<number>(1);

  // state to save and set gamesOrdering
  const [gamesOrdering, setGamesOrdering] = useState("relevance");

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
          search: URLSlug.slug,
          ordering: gamesOrdering,
          page: pageNumber,
        });
        setGameData(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGames();
  }, [userId, gamesOrdering, pageNumber, setSavedGames, URLSlug]);

  // useEffect to set the windows width
  useEffect(() => {
    // passes the setter to dynamically manage the number of rows
    handleResize(setNumberOfGroups);

    // wrapper callback to prevent handleResize from running in the listener
    const handleResizeWrapper = () => handleResize(setNumberOfGroups);

    // runs whenever the windows is resized
    window.addEventListener("resize", handleResizeWrapper);

    return () => window.removeEventListener("resize", handleResizeWrapper);
  }, []);

  // pass the game data and the number of groups and return an array of arrays
  const groupedData = groupData(gameData?.results, numberOfGroups);

  // once there is gameData scroll up
  if (gameData) {
    (() => {
      //must be written this way because window.scroll does not work when routing
      document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    })();
  }

  return (
    <Stack spacing={4} paddingX={2} component={"section"}>
      {/* order selector  */}
      <div className="flex w-full justify-center sm:block">
        <OrderSelector
          setGamesOrdering={setGamesOrdering}
          gamesOrdering={gamesOrdering}
        />
      </div>

      {/* game cards/skeleton */}
      {gameData && gameData.count ? (
        <Stack className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {/* map through the x amount of groups */}
          {groupedData.map((group, index) => (
            <Stack
              key={group[index]?.slug || `group_${index}`}
              className="space-y-4"
            >
              {/* then for each group, render in a column a card */}
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
          ))}
        </Stack>
      ) : gameData && !gameData.count ? (
        // if not have has been found
        <GamesNotFound />
      ) : (
        // else skeleton
        <CardsSkeleton itemsPerPage={itemsPerPage} />
      )}

      {/* pagination */}
      <CustomPagination
        setPageNumber={setPageNumber}
        itemsCount={gameData?.count}
        itemsPerPage={itemsPerPage}
        pageNumber={pageNumber}
      />
    </Stack>
  );
};

export default GamesContainer;
