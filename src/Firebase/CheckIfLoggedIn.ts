import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./FirebaseDatabase";
import { HandleUserId } from "../Types/Types";

// function which will run on the first app mount, sets logged in, will set the id
export const checkIfLoggedIn = (handleUserId: HandleUserId) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      handleUserId(user.uid);
    }
  });
};
