import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { HandleUserId, SetIsLoaded, SetProfileData } from "../Types/Types";

// function which will run on the first app mount, sets logged in, will set the id
export const checkIfLoggedIn = (
  handleUserId: HandleUserId,
  setProfileData: SetProfileData,
  setIsLoaded: SetIsLoaded,
) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userDisplayName = user.displayName;
      const userPhoto = user.photoURL;
      setProfileData({ userDisplayName, userPhoto });
      handleUserId(user.uid);
    }
    setIsLoaded(true);
  });
};
