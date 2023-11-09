// react hooks
import { useContext, useState, useEffect } from "react";

//context
import { userIdContext } from "../context/UserContext";

// gameCards component which we use to map
import GameCards from "../components/GameCards/GameCards";

// mui component
import { Stack } from "@mui/material";

//  readData aka saved games
import { readData } from "../Firebase/Database";

// types
import { GameData, UserDataType } from "../Types/Types";

// RRD navigation to main page
import { useNavigate } from "react-router-dom";

// function to divide the items into groups
import groupData from "../utils/GroupedData";

// profile card component
import Profile from "../components/Profile";

// pagination component
import CustomPagination from "../components/CustomPagination";
import CardsSkeleton from "../components/CardsSkeleton";
import { handleResize } from "../utils/WindowWidth";

const ProfileContainer = ({ userDisplayName, userPhoto }: UserDataType) => {
  // gets userId
  const userId = useContext(userIdContext)?.userId;

  // to set the number of groups dynamically
  const [numberOfGroups, setNumberOfGroups] = useState<number>(1);

  // to navigate to the main page
  const nav = useNavigate();

  // sets the saved games from firestore
  const [savedGames, setSavedGames] = useState<GameData[]>();

  // sets the page to show the range of the sliced array
  const [PageNumber, setPageNumber] = useState<number>(1);

  // amount of items to be shown in each page
  const itemsPerPage: number = 20;

  // calculate the start - 1 because the pagination starts at 1
  const indexStart: number = (PageNumber - 1) * itemsPerPage;

  // the end of the index will be itemsPerPage more than the start of the index
  const indexEnd: number = indexStart + itemsPerPage;

  // sliced array to pass to groupedGamesData
  const slicedSavedGames = savedGames?.slice(indexStart, indexEnd);

  useEffect(() => {
    //fetches saved games if the user is logged in
    const fetchFirestoreGames = async () => {
      if (userId) {
        try {
          const firestoreData = await readData(userId);
          setSavedGames(firestoreData?.games);
        } catch (error) {
          console.log(error);
        }
      } else {
        nav("/");
      }
    };

    fetchFirestoreGames();
  }, [userId, nav]);

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

  // runs a function to split the games into numberOfGroups
  const groupedGamesData = groupData(slicedSavedGames, numberOfGroups);

  return (
    <Stack className="flex flex-col items-center" spacing={4} paddingX={2}>
      <Profile
        userDisplayName={userDisplayName}
        userPhoto={userPhoto}
        savedGamesLength={savedGames?.length}
        userId={userId}
      />
      {savedGames ? (
        <Stack className="grid w-full grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {groupedGamesData.map((group, index) => (
            <Stack key={`group_${index}`} className="space-y-4">
              {group.map((game) => (
                <GameCards
                  name={game.name}
                  background_image={game.background_image}
                  key={game.name}
                  metacritic={game.metacritic}
                  parent_platforms={game.parent_platforms}
                  released={game.released}
                  userId={userId}
                  isInFavorite={true}
                  slug={game.slug}
                />
              ))}
            </Stack>
          ))}
        </Stack>
      ) : (
        <CardsSkeleton itemsPerPage={itemsPerPage} />
      )}

      <CustomPagination
        pageNumber={PageNumber}
        setPageNumber={setPageNumber}
        itemsPerPage={itemsPerPage}
        itemsCount={savedGames?.length}
      />
    </Stack>
  );
};

export default ProfileContainer;
