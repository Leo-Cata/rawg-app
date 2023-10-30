import { getAuth } from "firebase/auth";
import { db } from "./Database";
import { deleteDoc, doc } from "firebase/firestore";

export const deleteAccount = async (userId: string | null | undefined) => {
  // get user, if it exists  then delete
  const user = getAuth().currentUser;

  if (user) {
    try {
      // delete is a method from user
      await user.delete();

      // if there is user id, get a reference from 'users' and delete it
      if (userId) {
        const userRef = doc(db, "users", userId);
        await deleteDoc(userRef);
      }
    } catch (error) {
      console.log(error);
    }
  }
};
