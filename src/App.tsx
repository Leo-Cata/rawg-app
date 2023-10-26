import GamesContainer from "./containers/GamesContainer";
import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { userIdContext } from "./context/UserContext";
import { UserContextValues, UserDataType } from "./Types/Types";
import { checkIfLoggedIn } from "./Firebase/CheckIfLoggedIn";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";

const App = () => {
  // get the values and assert the type to use UserContextValues
  const { userId, handleUserId } = useContext(
    userIdContext,
  ) as UserContextValues;

  // State to manage GameContainer key
  const [gamesContainerKey, setGamesContainerKey] = useState(Date.now());

  // sets profile data
  const [profileData, setProfileData] = useState<UserDataType | null>();

  // will run on mount, checking and setting the uid
  useEffect(() => {
    checkIfLoggedIn(handleUserId, setProfileData);
  }, [handleUserId]);

  useEffect(() => {
    //set new key for GamesContainer, making it reload
    setGamesContainerKey(Date.now());
    // deletes the profile data
    setProfileData(null);
  }, [userId]);

  return (
    <>
      <Navbar
        userDisplayName={profileData?.userDisplayName}
        userPhoto={profileData?.userPhoto}
        handleUserId={handleUserId}
      />
      <Typography variant="body1">{userId}</Typography>
      <Routes>
        <Route path="/" element={<GamesContainer key={gamesContainerKey} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App;
