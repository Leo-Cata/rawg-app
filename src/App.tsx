import GamesContainer from "./containers/GamesContainer";
import GoogleButton from "react-google-button";
import { Button, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { userIdContext } from "./context/UserContext";
import { UserContextValues } from "./Types/Types";
import { signInGoogle } from "./Firebase/SignInWithGoogle";
import { checkIfLoggedIn } from "./Firebase/CheckIfLoggedIn";
import { signOutGoogle } from "./Firebase/SignOutOfGoogle";
import { useState } from "react";

const App = () => {
  // get the values and assert the type to use UserContextValues
  const { userId, handleUserId } = useContext(
    userIdContext,
  ) as UserContextValues;

  // State to manage GameContainer key
  const [gamesContainerKey, setGamesContainerKey] = useState(Date.now());

  // will run on mount, checking and setting the uid
  useEffect(() => {
    checkIfLoggedIn(handleUserId);
  }, [handleUserId]);

  useEffect(() => {
    //set new key for GamesContainer, making it reload
    if (userId) {
      setGamesContainerKey(Date.now());
    }
  }, [userId]);

  return (
    <div className="flex-grow  bg-custom-background  px-4 py-10 text-white">
      {userId ? (
        <Button
          onClick={() => signOutGoogle(handleUserId)}
          className="text-white"
          variant="outlined"
        >
          sign out
        </Button>
      ) : (
        <GoogleButton onClick={() => signInGoogle(handleUserId)} />
      )}

      <Typography variant="body1">{userId}</Typography>
      <GamesContainer key={gamesContainerKey} />
    </div>
  );
};

export default App;
