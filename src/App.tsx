import GamesContainer from "./containers/GamesContainer";
// import GoogleButton from "react-google-button";
import { Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { userIdContext } from "./context/UserContext";
import { UserContextValues, UserDataType } from "./Types/Types";
// import { signInGoogle } from "./Firebase/SignInWithGoogle";
import { checkIfLoggedIn } from "./Firebase/CheckIfLoggedIn";
// import { signOutGoogle } from "./Firebase/SignOutOfGoogle";
import { useState } from "react";
import Navbar from "./components/Navbar";

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
      <GamesContainer key={gamesContainerKey} />
    </>
  );
};

export default App;
