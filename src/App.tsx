import GamesContainer from "./containers/GamesContainer";
import GoogleButton from "react-google-button";
import { Button, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { userIdContext } from "./context/UserContext";
import { UserContextValues } from "./Types/Types";
import { signInGoogle } from "./firebase/SignInWithGoogle";
import { checkIfLoggedIn } from "./firebase/CheckIfLoggedIn";
import { signOutGoogle } from "./firebase/SignOutOfGoogle";

const App = () => {
  // get the values and assert the type to use UserContextValues
  const { userId, handleUserId } = useContext(
    userIdContext,
  ) as UserContextValues;

  useEffect(() => {
    checkIfLoggedIn(handleUserId);
  }, [handleUserId]);
  console.log(userId);
  return (
    <div className="flex-grow bg-[#070703] px-4 py-10">
      {!userId && <GoogleButton onClick={() => signInGoogle(handleUserId)} />}
      <Button
        onClick={() => signOutGoogle(handleUserId)}
        className="text-white"
        variant="outlined"
      >
        sign out
      </Button>
      <Typography variant="body1" className="text-white">
        {userId}
      </Typography>
      <GamesContainer />
    </div>
  );
};

export default App;
