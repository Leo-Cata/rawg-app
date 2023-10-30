import { useContext, useState } from "react";
import { userIdContext } from "../context/UserContext";
import GameCards from "../components/GameCards/GameCards";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import { readData } from "../Firebase/Database";
import { GameData, UserDataType } from "../Types/Types";
import { useNavigate } from "react-router-dom";
import groupData from "../utils/GroupedData";
import Profile from "../components/Profile";

const ProfileContainer = ({ userDisplayName, userPhoto }: UserDataType) => {
  // gets userId
  const userId = useContext(userIdContext)?.userId;

  // to set the number of groups dynamically
  const [numberOfGroups, setNumberOfGroups] = useState<number>(1);

  // to navigate to the main page
  const nav = useNavigate();

  // sets the saved games from firestore
  const [savedGames, setSavedGames] = useState<GameData[]>();

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

  const groupedGamesData = groupData(savedGames, numberOfGroups);

  return (
    <Stack className="flex flex-col items-center" spacing={4} paddingX={2}>
      <Profile
        userDisplayName={userDisplayName}
        userPhoto={userPhoto}
        savedGamesLength={savedGames?.length}
        userId={userId}
      />

      <Stack className="grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {groupedGamesData &&
          groupedGamesData.map((group, index) => (
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
                />
              ))}
            </Stack>
          ))}
      </Stack>
    </Stack>
  );
};

export default ProfileContainer;
