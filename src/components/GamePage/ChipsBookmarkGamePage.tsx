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
import { addGames } from "../../utils/AddGames";

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
            className=" font-hyperlegible"
          />
          <CardsPlatforms parent_platforms={parent_platforms} />
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          {/* playtime */}
          <Chip
            label={`Average Playtime: ${playtime} Hours`}
            color="primary"
            className=" font-hyperlegible"
          />

          {/* bookmark */}
          <IconButton
            aria-label="add to bookmarks"
            onClick={() =>
              addGames({
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
              })
            }
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
