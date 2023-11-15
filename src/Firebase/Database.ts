// app ref
import { app } from "./Firebase";

// firebase methods
import { getFirestore, doc, getDoc } from "firebase/firestore";

//initialize the database
export const db = getFirestore(app);

// reads saved games from {userId} and then returns them
export const readData = async (userId: string) => {
  const snapshot = await getDoc(doc(db, `users/${userId}`));
  if (snapshot.exists()) {
    const docReadData = snapshot.data();
    return docReadData;
  }
};
