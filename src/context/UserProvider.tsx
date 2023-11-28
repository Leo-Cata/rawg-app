// hook
import { useState } from "react";

// context
import { appContext } from "./appContext";

// type
import { HandleUserId, GameData } from "../Types/Types";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  // saved games
  const [savedGames, setSavedGames] = useState<GameData[] | undefined>();

  // handle setting the user id
  const handleUserId: HandleUserId = (uid) => {
    setUserId(uid);
  };

  // states for different forms of searching
  const [searchGenres, setSearchGenres] = useState<number | undefined>();

  const [searchDates, setSearchDates] = useState<string | undefined>();

  const [searchPlatforms, setSearchPlatforms] = useState<number | undefined>();

  return (
    // from userContext you use the context created, hence why its not userProvider.Provider
    <appContext.Provider
      value={{
        userId,
        handleUserId,
        savedGames,
        setSavedGames,
        searchGenres,
        setSearchGenres,
        searchDates,
        setSearchDates,
        searchPlatforms,
        setSearchPlatforms,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default UserProvider;
