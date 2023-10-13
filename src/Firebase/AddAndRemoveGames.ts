import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./Database";
import { GameCardsProps } from "../Types/Types";

export const addAndRemoveGames = async (game: GameCardsProps) => {
  try {
    // get the reference for the data base for user
    const userRef = doc(db, "users", "asfasf");

    // get the document from userRef
    const userDoc = await getDoc(userRef);

    if (userDoc.exists() && userDoc.data().games) {
      //if userDoc exits and userDoc data contains games then

      // if in userDoc exits a game with name userGames.gameName equal to the game.gameName being passed, delete it
      if (
        userDoc
          .data()
          ?.games.some(
            (userGames: GameCardsProps) => userGames.gameName === game.gameName,
          )
      ) {
        await updateDoc(userRef, { games: arrayRemove(game) });
      } else {
        // else add it to games
        await updateDoc(userRef, { games: arrayUnion(game) });
      }
    } else {
      // else if userDoc doesn't exist or it does't contain data().games, create a new user
      await setDoc(userRef, { games: [game] }, { merge: true });
    }
  } catch (error) {
    console.log(error);
  }
};
