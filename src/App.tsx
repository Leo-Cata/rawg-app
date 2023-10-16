import GamesContainer from "./containers/GamesContainer";
import GoogleButton from "react-google-button";
import {
  checkIfLoggedIn,
  signInGoogle,
  signOutGoogle,
} from "./firebase/Firebase";
import { Button, Typography } from "@mui/material";
import { useContext } from "react";
import { userIdContext } from "./context/UserContext";
import { UserContextValues } from "./Types/Types";

const App = () => {
  // get the values and assert the type to use UserContextValues
  const { userId, handleUserId } = useContext(
    userIdContext,
  ) as UserContextValues;

  const handleUidCallback = (uid: string) => {
    handleUserId(uid); // Set the userId using handleUserId
  };

  const handleLogin = () => {
    // Call the signInGoogle function and pass the callback function
    signInGoogle(handleUidCallback);
  };

  console.log(userId);
  return (
    <div className="flex-grow bg-[#070703] px-4 py-10">
      <GoogleButton onClick={handleLogin} />
      <Button
        onClick={checkIfLoggedIn}
        className="text-white"
        variant="outlined"
      >
        is the user logged in
      </Button>
      <Button onClick={signOutGoogle} className="text-white" variant="outlined">
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
