import {
  Box,
  Chip,
  IconButton,
  Stack,
  Snackbar,
  Alert,
  AlertColor,
} from "@mui/material";
import CardsPlatforms from "../GameCards/CardsPlatforms";
import { yearFormatter } from "../../utils/YearFormatter";
import { GameData } from "../../Types/Types";
import { FaRegBookmark, FaBookmark } from "react-icons/fa6";
import { useContext, useState } from "react";
import { userIdContext } from "../../context/UserContext";
import { addAndRemoveGames } from "../../Firebase/AddAndRemoveGames";

const ChipsBookmarkGamePage = ({
  background_image,
  parent_platforms,
  metacritic,
  name,
  slug,
  released,
  playtime,
  isInFavorite,
}: GameData) => {
  // useState to change bookmark icon
  const [isBookmarked, setIsBookmarked] = useState(isInFavorite);

  // snackbar opener/closer
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  // snackbar message setter
  const [snackbarMessage, setSnackbarMessage] = useState("");

  //alert severity aka color setter
  const [severity, setSeverity] = useState<AlertColor>("success");
  //user id
  const userId = useContext(userIdContext)?.userId;

  // function to add important game data to favorites and show visual feedback for favorite games
  const addGames = async () => {
    // opens the snackbar, sets the text to loading and color to info
    setIsSnackbarOpen(true);
    setSnackbarMessage(`Loading...`);
    setSeverity("info");

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

        // closes the current snackbar and then reopens it updated
        setIsSnackbarOpen(false);

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
      <Box className="space-y-1 font-bold">
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Chip
            label={`Released: ${
              released ? yearFormatter(released) : "Unannounced"
            }`}
            color="primary"
          />
          <CardsPlatforms parent_platforms={parent_platforms} />
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* playtime */}
          <Chip label={`Average Playtime: ${playtime} Hours`} color="primary" />

          {/* bookmark */}
          <IconButton
            aria-label="add to bookmarks"
            onClick={addGames}
            className="text-yellow-500"
          >
            {isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
          </IconButton>
        </Stack>
      </Box>

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

export default ChipsBookmarkGamePage;
