// container which fetches the list of games
import GamesContainer from "./containers/GamesContainer";

// hooks and context
import { useContext, useEffect, useState } from "react";
import { userIdContext } from "./context/UserContext";

// types
import { UserContextValues, UserDataType } from "./Types/Types";

// function to check if the user is logged in
import { checkIfLoggedIn } from "./Firebase/CheckIfLoggedIn";

// navbar component
import Navbar from "./components/Navbar/Navbar";

// router components
import { Routes, Route } from "react-router-dom";

// container which fetches the profile information
import ProfileContainer from "./containers/ProfileContainer";

// container which fetches data of a single game
import GamePageContainer from "./containers/GamePageContainer";

// footer
import Footer from "./components/Footer/Footer";

const App = () => {
  // get the values and assert the type to use UserContextValues
  const { userId, handleUserId } = useContext(
    userIdContext,
  ) as UserContextValues;

  // State to manage GameContainer key
  const [gamesContainerKey, setGamesContainerKey] = useState(Date.now());

  // sets profile data
  const [profileData, setProfileData] = useState<UserDataType | null>();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // will run on mount, checking and setting the uid
  useEffect(() => {
    checkIfLoggedIn(handleUserId, setProfileData, setIsLoaded);
  }, [handleUserId]);

  useEffect(() => {
    //set new key for GamesContainer, making it reload
    setGamesContainerKey(Date.now());
    // deletes the profile data
    setProfileData(null);
  }, [userId]);

  return (
    <main className="flex min-h-screen flex-col">
      <div className="mb-28 flex-grow">
        {isLoaded && (
          <>
            <Navbar
              userDisplayName={profileData?.userDisplayName}
              userPhoto={profileData?.userPhoto}
              handleUserId={handleUserId}
            />
            <Routes>
              <Route
                path="/"
                element={<GamesContainer key={gamesContainerKey} />}
              />
              <Route
                path="/search/:slug"
                element={<GamesContainer key={gamesContainerKey} />}
              />
              <Route
                path="/profile"
                element={
                  <ProfileContainer
                    userDisplayName={profileData?.userDisplayName}
                    userPhoto={profileData?.userPhoto}
                  />
                }
              />
              <Route path="/games/:slug" element={<GamePageContainer />} />
            </Routes>
          </>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default App;
