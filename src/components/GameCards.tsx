// material components
import {
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Chip,
  Tooltip,
} from "@mui/material";

// types
import { GameCardsProps, PlatformsIcons } from "../Types/Types";

// react-icons
import {
  SiWindows10,
  SiPlaystation,
  SiApple,
  SiXbox,
  SiNintendo,
  SiIos,
  SiAndroid,
  SiAtari,
  SiSega,
  SiGooglechrome,
  SiLinux,
} from "react-icons/si";

//zoom effect for tooltip
import Zoom from "@mui/material/Zoom";

const GameCards = ({
  gameImage,
  availablePlatforms,
  metacritic,
  releaseDate,
  gameName,
}: GameCardsProps) => {
  // to show icon according to available platform
  const platformsIcons: PlatformsIcons = {
    pc: <SiWindows10 />,
    playstation: <SiPlaystation size="16px" />,
    xbox: <SiXbox />,
    ios: <SiIos />,
    android: <SiAndroid />,
    mac: <SiApple />,
    nintendo: <SiNintendo />,
    atari: <SiAtari />,
    sega: <SiSega />,
    web: <SiGooglechrome />,
    linux: <SiLinux size="17px" />,
  };

  //regex value to capture YYYY MM DD and then rearrange into DD/MM/YYY
  const dayMonthYearRegex = /(\d{4})-(\d{2})-(\d{2})/;
  const dayMonthYearStringRearrange = "$3/$2/$1";

  return (
    <Card className="w-full max-w-[450px] rounded-2xl bg-[#181818]">
      <CardMedia
        className="min-h-[12rem]"
        component="img"
        image={gameImage}
        loading="lazy"
      />
      <CardContent className="w-full text-white">
        {/* icons */}
        <Stack direction={"row"} flexWrap={"wrap"} className="mb-1 space-x-2">
          {availablePlatforms.map((platforms) => (
            <Tooltip
              title={platforms.platform.slug}
              key={platforms.platform.name}
              placement="top"
              TransitionComponent={Zoom}
              arrow
            >
              <Typography className="text-sm">
                {platformsIcons[platforms.platform.slug]}
              </Typography>
            </Tooltip>
          ))}
        </Stack>
        {/* game name and metacritic */}
        <Stack direction={"row"} alignItems={"center"} className="pb-2">
          <Typography variant="h5" className="flex-grow font-semibold">
            {gameName}
          </Typography>
          {/* <Typography variant="subtitle1">{metacritic}</Typography> */}
          <Tooltip
            title="Metacritic Score"
            placement="top"
            TransitionComponent={Zoom}
            arrow
          >
            <Chip
              label={metacritic}
              color="success"
              variant="outlined"
              size="small"
              className="cursor-default bg-[#388e3c]/10"
            />
          </Tooltip>
        </Stack>
        {/* release date */}
        <Typography variant="subtitle1">
          Release Date:{" "}
          {releaseDate.replace(dayMonthYearRegex, dayMonthYearStringRearrange)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default GameCards;
