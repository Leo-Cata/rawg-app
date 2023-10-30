import React, { useState } from "react";
import { userIdContext } from "./UserContext";
import { HandleUserId, GameData } from "../Types/Types";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string | null>(null);

  // saved games
  const [savedGames, setSavedGames] = useState<GameData[] | undefined>();

  // handle setting the user id
  const handleUserId: HandleUserId = (uid) => {
    setUserId(uid);
  };

  return (
    // from userContext you use the context created, hence why its not userProvider.Provider
    <userIdContext.Provider
      value={{ userId, handleUserId, savedGames, setSavedGames }}
    >
      {children}
    </userIdContext.Provider>
  );
};

export default UserProvider;
