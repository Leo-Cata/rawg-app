import { db } from "./Database";
import { deleteField, doc, getDoc, updateDoc } from "firebase/firestore";

export const deleteSavedGames = async (userId: string | undefined | null) => {
  // if there is an userId
  if (userId) {
    try {
      //get a reference to the db
      const userRef = doc(db, "users", userId);

      // get the users docs
      const userDoc = await getDoc(userRef);

      // if there is a doc, delete the field 'games'
      if (userDoc.exists()) {
        await updateDoc(userRef, { games: deleteField() });
      }
    } catch (error) {
      console.log(error);
    }
  }
};
