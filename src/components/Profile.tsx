import { useContext, useState } from "react";
import { userIdContext } from "../context/UserContext";
import GameCards from "./GameCards/GameCards";
import { Stack, Avatar, Paper, Typography } from "@mui/material";
import { useEffect } from "react";
import { readData } from "../Firebase/Database";
import { GameData, UserDataType } from "../Types/Types";
import { useNavigate } from "react-router-dom";
import groupData from "../utils/GroupedData";

const Profile = ({ userDisplayName, userPhoto }: UserDataType) => {
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
  console.log(groupedGamesData);

  return (
    <Stack className="flex flex-col items-center" spacing={10}>
      <Paper className="mx-2 flex w-full max-w-[500px] flex-col items-center py-4">
        <Avatar
          src={userPhoto ? userPhoto : ""}
          alt={`${userDisplayName} profile picture`}
          className="h-32 w-32"
        />
        <Typography className="py-4">{userDisplayName}</Typography>
      </Paper>

      <Stack className=" grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {groupedGamesData &&
          groupedGamesData.map((group, index) => (
            <Stack key={`group_${index}`}>
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

export default Profile;
