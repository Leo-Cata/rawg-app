import React, { useState } from "react";
import { userIdContext } from "./UserContext";
import { HandleUserId } from "../Types/Types";

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState<string>("Not Logged In");

  // handle setting the user id
  const handleUserId: HandleUserId = (uid) => {
    setUserId(uid);
  };

  return (
    // from userContext you use the context created, hence why its not userProvider.Provider
    <userIdContext.Provider value={{ userId, handleUserId }}>
      {children}
    </userIdContext.Provider>
  );
};

export default UserProvider;
