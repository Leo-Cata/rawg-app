import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "./Database";
import { GameCardsProps } from "../Types/Types";

export const addAndRemoveGames = async (
  game: GameCardsProps,
  userId: string,
) => {
  console.time("add and remove games function");
  try {
    // get the reference for the data base for user
    const userRef = doc(db, "users", userId);

    // get the document from userRef
    const userDoc = await getDoc(userRef);

    //if userDoc exits and userDoc data contains games then
    if (userDoc.exists() && userDoc.data().games) {
      console.time();

      // if in userDoc exits a game with name userGames.gameName equal to the game.gameName being passed, delete it
      if (
        userDoc
          .data()
          ?.games.some(
            (userGames: GameCardsProps) => userGames.gameName === game.gameName,
          )
      ) {
        await setDoc(userRef, { games: arrayRemove(game) }, { merge: true });
      } else {
        // else add it to games
        await setDoc(userRef, { games: arrayUnion(game) }, { merge: true });
      }
    } else {
      // else if userDoc doesn't exist or it does't contain data().games, create a new user
      await setDoc(userRef, { games: [game] }, { merge: true });
    }
  } catch (error) {
    console.log(error);
  }
  console.timeEnd("add and remove games function");
};
