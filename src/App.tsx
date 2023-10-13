import GamesContainer from "./containers/GamesContainer";
import GoogleButton from "react-google-button";
import {
  checkIfLoggedIn,
  signInGoogle,
  signOutGoogle,
} from "./firebase/Firebase";
import { Button } from "@mui/material";
// import { signInGoogle } from "./firebase/Firebase";

// import { db } from "./Firebase/Database";
// import { resp, signInGoogle, signOutGoogle } from "./Firebase/Firebase";

// const App = () => {
//   return (
//     <div>
//       <button onClick={signInGoogle} className="bg-purple-700">
//         sign in
//       </button>
//       <button onClick={signOutGoogle}>sign out</button>
//       <button onClick={() => console.log(db, resp)}>resp</button>

const App = () => {
  return (
    <div className="flex-grow bg-[#070703] px-4 py-10">
      <GoogleButton onClick={signInGoogle} />
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

      <GamesContainer />
    </div>
  );
};

export default App;
