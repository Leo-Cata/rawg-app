import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./FirebaseDatabase";
import { HandleUserId } from "../Types/Types";

// function to sign in with google, gets a function which will set the userId
export const signInGoogle = async (handleUserId: HandleUserId) => {
  try {
    // custom param to always have to choose an account, instead of automatically signing in to the previous one
    provider.setCustomParameters({ prompt: "select_account" });

    // get the results
    const result = await signInWithPopup(auth, provider);

    // once the user is signed in, you can access their uid
    const uid = result.user.uid;

    // now, call the callback function to handle the uid
    handleUserId(uid);
  } catch (error) {
    console.log(error);
  }
};
