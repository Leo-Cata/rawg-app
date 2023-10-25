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
import { GameCardsProps } from "../../Types/Types";

// mui icons
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

// firebase function to add and remove data
import { addAndRemoveGames } from "../../Firebase/AddAndRemoveGames";

// components
import CardsMedia from "./CardsMedia";
import CardsPlatforms from "./CardsPlatforms";
import CardsReleaseDate from "./CardsReleaseDate";
import CardsNameAndMetacritic from "./CardsNameAndMetacritic";

const GameCards = ({
  gameImage,
  availablePlatforms,
  metacritic,
  releaseDate,
  gameName,
  userId,
  isInFavorite,
}: GameCardsProps) => {
  // useState to change favorite icon
  const [isFavorite, setIsFavorite] = useState(isInFavorite);

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
            gameImage,
            availablePlatforms,
            metacritic,
            releaseDate,
            gameName,
          },
          userId,
        );
        // changes the icon
        setIsFavorite((prev) => !prev);

        // sets the message
        setSnackbarMessage(`${gameName} has been saved`);

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
      <Card className="rounded-2xl transition-all hover:scale-105 hover:cursor-pointer">
        {/* images */}
        <CardsMedia gameImage={gameImage} gameName={gameName} />

        <CardContent className="w-full text-white group-hover:pb-0">
          {/* icons */}
          {availablePlatforms && (
            <CardsPlatforms availablePlatforms={availablePlatforms} />
          )}

          {/* game name and metacritic */}
          <CardsNameAndMetacritic gameName={gameName} metacritic={metacritic} />

          <Stack direction={"row"} alignItems={"center"}>
            {/* release date */}
            <CardsReleaseDate releaseDate={releaseDate} />

            {/* add to favorite */}
            <IconButton
              aria-label="add to favorite"
              className="p-0 pr-[3px]"
              onClick={() => addGames()}
            >
              {isFavorite ? (
                <StarRoundedIcon className="text-yellow-500" />
              ) : (
                <StarBorderRoundedIcon className="text-yellow-500" />
              )}
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
