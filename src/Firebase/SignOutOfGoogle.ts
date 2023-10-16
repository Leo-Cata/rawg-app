import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import { HandleUserId } from "../Types/Types";

// function to sign out of google, gets a function to ser the user id to null
export const signOutGoogle = async (handleUserId: HandleUserId) => {
  try {
    await signOut(auth);
    handleUserId(null);
  } catch (error) {
    console.log(error);
  }
};
