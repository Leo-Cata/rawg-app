// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env
    .VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
// sign in with google
export const signInGoogle = async (handleUid: (uid: string) => void) => {
  // try {
  //   // custom param to always have to choose an account, instead of automatically signing in to the previous one
  //   provider.setCustomParameters({ prompt: "select_account" });

  //   //gets the authentication data from the provider which is google in this case
  //   await signInWithPopup(auth, provider);
  // } catch (error) {
  //   console.log(error);
  // }
  try {
    provider.setCustomParameters({ prompt: "select_account" });
    const result = await signInWithPopup(auth, provider);

    // Once the user is signed in, you can access their UID
    const uid = result.user.uid;

    // Now, call the callback function to handle the UID
    handleUid(uid);
  } catch (error) {
    console.log(error);
  }
};

// sign out of google account
export const signOutGoogle = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log(error);
  }
};

// check if user is logged in
export const checkIfLoggedIn = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log("logged", user);
    } else {
      console.log("not logged in");
    }
  });
};
