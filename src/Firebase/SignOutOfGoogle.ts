import { signOut } from "firebase/auth";
import { auth } from "./FirebaseDatabase";
import { HandleUserId } from "../Types/Types";

// function to sign out of google, gets a function to ser the user id to null
export const signOutGoogle = async (handleUserId: HandleUserId) => {
  try {
    // waits to sign out
    await signOut(auth);

    // and deletes the uid
    handleUserId(null);
  } catch (error) {
    console.log(error);
  }
};
