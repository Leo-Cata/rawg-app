// react hooks
import { useState } from "react";

// material components
import {
  Card,
  CardContent,
  Stack,
  IconButton,
  Snackbar,
  Alert,
  AlertColor,
} from "@mui/material";

// types
import { GameData } from "../../Types/Types";

// react icons
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";

// firebase function to add and remove data
import { addAndRemoveGames } from "../../Firebase/AddAndRemoveGames";

// components
import CardsMedia from "./CardsMedia";
import CardsPlatforms from "./CardsPlatforms";
import CardsReleaseDate from "./CardsReleaseDate";
import CardsNameAndMetacritic from "./CardsNameAndMetacritic";

// react-router-dom
import { Link } from "react-router-dom";

const GameCards = ({
  background_image,
  parent_platforms,
  metacritic,
  released,
  name,
  userId,
  isInFavorite,
  slug,
}: GameData) => {
  // useState to change bookmark icon
  const [isBookmarked, setIsBookmarked] = useState(isInFavorite);

  // snackbar opener/closer
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  // snackbar message setter
  const [snackbarMessage, setSnackbarMessage] = useState("");

  //alert severity aka color setter
  const [severity, setSeverity] = useState<AlertColor>("success");

  // function to add important game data to favorites and show visual feedback for favorite games
  const addGames = async () => {
    if (userId) {
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
        // changes the icon
        setIsBookmarked((prev) => !prev);

        // sets the message
        setSnackbarMessage(
          `${
            isBookmarked ? `${name} has been deleted` : `${name} has been saved`
          } `,
        );
        setSeverity(`${isBookmarked ? "error" : "success"}`);
        // opens the snackbar
        setIsSnackbarOpen(true);
      } catch (error) {
        console.log(error);

        // sets severity aka color
        setSeverity("error");

        // sets the message
        setSnackbarMessage("Theres been an error");
        // opens the snackbar
        setIsSnackbarOpen(true);
      }
    } else {
      // sets severity aka color
      setSeverity("info");

      // sets the message
      setSnackbarMessage("You aren't logged in");

      // opens the snackbar
      setIsSnackbarOpen(true);
    }
  };

  return (
    <>
      <Card className="rounded-2xl transition-all hover:scale-105">
        <Link to={`/games/${slug}`} state={isBookmarked}>
          {/* images */}
          <CardsMedia background_image={background_image} name={name} />
        </Link>

        <CardContent className="w-full text-white group-hover:pb-0">
          {/* icons */}
          {parent_platforms && (
            <CardsPlatforms parent_platforms={parent_platforms} />
          )}

          {/* game name and metacritic */}
          <Link to={`/games/${slug}`}>
            <CardsNameAndMetacritic name={name} metacritic={metacritic} />
          </Link>

          <Stack direction={"row"} alignItems={"center"}>
            {/* release date */}
            <CardsReleaseDate released={released} />

            {/* add to favorite */}
            <IconButton
              aria-label="add to favorite"
              onClick={addGames}
              className="p-1 text-yellow-500"
            >
              {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
            </IconButton>
          </Stack>
        </CardContent>
      </Card>

      {/* snackbar */}
      <Snackbar
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClick={() => setIsSnackbarOpen(false)}
        onClose={() => setIsSnackbarOpen(false)}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Alert severity={severity} variant="filled">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default GameCards;
