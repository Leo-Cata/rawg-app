// firebase function to add and remove games
import { addAndRemoveGames } from "../Firebase/AddAndRemoveGames";

// type
import { AddGamesProps } from "../Types/Types";

// function to add important game data to favorites and show visual feedback for favorite games

export const gamesHandler = async ({
  setIsSnackbarOpen,
  setSnackbarMessage,
  setSeverity,
  setIsBookmarked,
  isBookmarked,
  userId,
  background_image,
  parent_platforms,
  metacritic,
  released,
  name,
  slug,
}: AddGamesProps) => {
  // sets the text, severity aka color and opens the snackbar
  setSnackbarMessage("Loading...");
  setSeverity("info");
  setIsSnackbarOpen(true);

  // saves/deletes the game if the user is logged in
  if (userId)
    try {
      await addAndRemoveGames(
        {
          background_image,
          parent_platforms,
          metacritic,
          released,
          name,
          slug,
        },
        userId,
      );

      // changes the bookmark icon
      setIsBookmarked((prev) => !prev);

      // sets the message
      setSnackbarMessage(
        `${
          isBookmarked
            ? `${name} has been deleted`
            : `${name} has been bookmarked`
        }`,
      );

      // sets the severity aka color
      setSeverity(`${isBookmarked ? "error" : "success"}`);

      // closes the current snackbar and reopens it with the updated info
      setIsSnackbarOpen(false);
      setIsSnackbarOpen(true);
    } catch (error) {
      console.log(error);

      //sets color, message and opens when there was an error
      setSeverity("error");
      setSnackbarMessage("Theres been an error");
      setIsSnackbarOpen(true);
    }
  else {
    //sets color, message and opens when the user isn't logged in
    setSeverity("info");
    setSnackbarMessage("You aren't logged in");
    setIsSnackbarOpen(true);
  }
};
